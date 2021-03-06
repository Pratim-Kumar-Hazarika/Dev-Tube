import { ReducerInitialState, Video,Playlist,PlayListName  } from "./video.reducer.types";


export const initialState :ReducerInitialState= {
    likedVideos: [],
    historyVideos: [],
    playlists :[],
    allVideos:[],
    dislikedVideos:[],
    playlistNames:[]
  }

  export type ACTION = 
    | {type :"VIDEOS_FROM_SERVER",payload:{allVideos:Video[]}}
    | {type :"PLAYLIST_FROM_SERVER",payload:{playlists: Playlist[],playlistNames:PlayListName[]}}
    | {type :"LIKED_VIDEOS_FROM_SERVER",payload:{likedVideos:Video[]}}
    | {type :"HISTORY_VIDEOS_FROM_SERVER",payload:{historyVideos:Video[]}}
    | {type :"LIKE_CLICK_HANDLER",payload:{videoId :string}}
    | {type :"DISLIKE_CLICK_HANDLER",payload:{videoId:string}}
    | {type :"HISTORY_VIDEOS",payload:{videoId:string}}
    | {type :"ADD_PLAYLIST",payload:{playlistName:string}}
    | {type :"ADD_VIDEO_TO_PLAYLIST",payload:{playlistName:string,videoId:string}}
    | {type :"DELETE_LIKED_VIDEO",payload:{videoId:string}}
    | {type :"DELETE_HISTORY_VIDEO",payload:{videoId:string}}
    | {type :"DELETE_VIDEO_FROM_PLAYLIST";payload:{playlistName:string,videoId:string}}
    | {type :"DELETE_ENTIRE_PLAYLIST";payload:{playlistName:string}}

export function reducer(state:ReducerInitialState,action:ACTION){
    switch (action.type) {
        case "VIDEOS_FROM_SERVER":
            return {
                ...state,
                allVideos:action.payload.allVideos
            };
        case "PLAYLIST_FROM_SERVER":
             return {
                 ...state,
                 playlists:action.payload.playlists,
                playlistNames:action.payload.playlistNames
            };
        case "LIKED_VIDEOS_FROM_SERVER":
             return {
                 ...state,
                 likedVideos:action.payload.likedVideos
             };
        case "HISTORY_VIDEOS_FROM_SERVER":
              return {
                 ...state,
                 historyVideos:action.payload.historyVideos
             };
        case  "LIKE_CLICK_HANDLER":
            const getLikedVideo = state.allVideos.filter((video)=>video._id === action.payload.videoId);
            const checkIfVideoIdExistinLiked = state.likedVideos.filter((video) =>video._id === action.payload.videoId);
            if(checkIfVideoIdExistinLiked.length <1){
                return{
                    ...state,
                    likedVideos:[...state.likedVideos,getLikedVideo[0]],
                    dislikedVideos:state.dislikedVideos.filter((video)=>video._id !== action.payload.videoId),
                }
            }return state;
        case "DISLIKE_CLICK_HANDLER" :
            const getDislikedVideo = state.allVideos.filter((video)=>video._id === action.payload.videoId);
            const checkIfVideoIdExistinDisliked = state.dislikedVideos.filter((video) =>video._id === action.payload.videoId);
            if(checkIfVideoIdExistinDisliked.length<1){
                return {
                    ...state,
                    likedVideos:state.likedVideos.filter((video)=>video._id !== action.payload.videoId),
                    dislikedVideos:[...state.dislikedVideos,getDislikedVideo[0]]
                }
            }return state; 
        case "HISTORY_VIDEOS" :
            const getHistoryVideo = state.allVideos.filter((video)=>video._id === action.payload.videoId);
            const checkIfVideoIdExistInHistory = state.historyVideos.filter((video) =>video._id === action.payload.videoId);
            if(checkIfVideoIdExistInHistory.length<1){
                return {
                    ...state,
                    historyVideos:[...state.historyVideos,getHistoryVideo[0]]
                }
            }return state;
        case "DELETE_HISTORY_VIDEO":
            return {
                ...state,
                historyVideos:state.historyVideos.filter((video)=>video._id!== action.payload.videoId)
            };
         case "DELETE_LIKED_VIDEO":
                return {
                    ...state,
                    likedVideos:state.likedVideos.filter((video)=>video._id!== action.payload.videoId)
             };
        case "ADD_PLAYLIST":
            return {
                ...state,
                playlistNames:[...state.playlistNames,action.payload.playlistName],
                playlists:[...state.playlists,{name:action.payload.playlistName,video:[]}]
            };
        case "ADD_VIDEO_TO_PLAYLIST":
            const getVideoToBeAddedToPlaylist = state.allVideos.filter((video)=>video._id === action.payload.videoId);
      
           return {
               ...state,
               playlists:state.playlists.map((playlist)=>(
                   playlist.name === action.payload.playlistName ? {...playlist,video:[...playlist.video,getVideoToBeAddedToPlaylist[0]]} : playlist
               ))
           };
        case "DELETE_VIDEO_FROM_PLAYLIST":
            return {
                ...state,
                playlists:state.playlists.map((playlist)=>(
                    playlist.name === action.payload.playlistName ? {...playlist, video:playlist.video.filter((video)=>video._id !== action.payload.videoId)} : playlist
                ))
            };
        case "DELETE_ENTIRE_PLAYLIST":
            return {
                ...state,
                playlistNames:state.playlistNames.filter((name)=>name !== action.payload.playlistName),
                playlists:state.playlists.filter((playlist)=>playlist.name !== action.payload.playlistName)
            }
        default:
           return state;
    }
   
}
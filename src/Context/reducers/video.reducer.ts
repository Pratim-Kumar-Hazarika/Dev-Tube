import { ReducerInitialState, Video  } from "./video.reducer.types";


export const initialState :ReducerInitialState= {
    likedVideos: [],
    historyVideos: [],
    playlists :[],
    allVideos:[],
  }

  export type ACTION = 
    | {type :"VIDEOS_FROM_SERVER",payload:{allVideos:Video[]}}

export function reducer(state:ReducerInitialState,action:ACTION){
    switch (action.type) {
        case "VIDEOS_FROM_SERVER":
            return {
                ...state,
                allVideos:action.payload.allVideos
            }
            
        default:
           return state;
    }
   
}
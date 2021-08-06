import  { FC,createContext, Dispatch, useContext, useEffect, useReducer, useState, SetStateAction } from "react";
import { useAuth } from "./AuthProvider";
import { ACTION, initialState, reducer } from "./reducers/video.reducer";
import { ReducerInitialState } from "./reducers/video.reducer.types";
import { getUserHistoryVideosFromServer } from "./utils/getUserHistoryVideosFromServer";
import { getUserIdFromServer } from "./utils/getUserIdFromServer";
import { getUserLikedVideosFromServer } from "./utils/getUserLikedVideosFromServer";
import { getUserPlaylistFromServer } from "./utils/getUserPlayistFromServer";
import { getVideosFromServer } from "./utils/getVideos";

interface ContextType {
    state:ReducerInitialState;
    dispatch:Dispatch<ACTION>;
    bgopacity:boolean;
    setBgOpacity:React.Dispatch<SetStateAction<boolean>>
    show:boolean;
    setShow:React.Dispatch<SetStateAction<boolean>>
    likedVideo:boolean
    setLikedVideo:React.Dispatch<SetStateAction<boolean>>
    dislikedVideo:boolean
    setDislikedVideo:React.Dispatch<SetStateAction<boolean>>
}

const VideoContext = createContext({} as ContextType);

export const VideoProvider: FC = ({children}:any) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const [bgopacity,setBgOpacity] = useState(false)
    const [show,setShow] = useState(false)
    const [likedVideo,setLikedVideo] = useState(false);
    const [dislikedVideo,setDislikedVideo] = useState(false);
    const {userID,token,setUserID} = useAuth();
    useEffect(()=>{
        getVideosFromServer(dispatch);
        getUserIdFromServer(token,setUserID)
      
    },[])
    useEffect(()=>{
        getUserPlaylistFromServer({dispatch,token,userID})
        getUserLikedVideosFromServer({dispatch,token,userID})
        getUserHistoryVideosFromServer({dispatch,token,userID})
    },[userID])

    return <VideoContext.Provider value={{state,dispatch,bgopacity,setBgOpacity,show,setShow,dislikedVideo,setDislikedVideo,likedVideo,setLikedVideo}}>{children}</VideoContext.Provider>
}


export function useVideo(){
    return useContext(VideoContext)
}
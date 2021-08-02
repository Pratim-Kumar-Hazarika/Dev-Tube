import  { FC,createContext, Dispatch, useContext, useEffect, useReducer } from "react";
import { ACTION, initialState, reducer } from "./reducers/video.reducer";
import { ReducerInitialState } from "./reducers/video.reducer.types";
import { getVideosFromServer } from "./utils/getVideos";

interface ContextType {
    state:ReducerInitialState;
    dispatch:Dispatch<ACTION>
}

const VideoContext = createContext({} as ContextType);

export const VideoProvider: FC = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
        getVideosFromServer(dispatch);
      
    },[])
    return <VideoContext.Provider value={{state,dispatch}}>{children}</VideoContext.Provider>
}


export function useVideo(){
    return useContext(VideoContext)
}
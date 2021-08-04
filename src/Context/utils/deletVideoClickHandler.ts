import { Location, State } from "history"
import { Dispatch } from "react"
import { ACTION } from "../reducers/video.reducer"

export type DeleteVideo= {
    _id:string;
    state:Location<State>;
    dispatch:Dispatch<ACTION>
}

export function deleteVideoClickHandler({_id,state,dispatch}:DeleteVideo){
    if(state.pathname=== "/history"){
        dispatch({type:"DELETE_HISTORY_VIDEO",payload:{videoId:_id}})
    }
    if(state.pathname=== "/liked"){
        dispatch({type:"DELETE_LIKED_VIDEO",payload:{videoId:_id}})
    }
}
import { Location, State } from "history"
import { Dispatch } from "react"
import { ACTION } from "../reducers/video.reducer"
import { deleteVideoFromHistory } from "./deleteVideoFromHistory"
import { deleteVideoFromLiked } from "./deleteVideoFromLiked"

export type DeleteVideo= {
    _id:string;
    state:Location<State>;
    dispatch:Dispatch<ACTION>;
    userID:string;
    token:string;
}


export function deleteVideoClickHandler({_id,state,dispatch,userID,token}:DeleteVideo){
    if(state.pathname=== "/history"){
        deleteVideoFromHistory({_id,dispatch,userID,token})
    }
    if(state.pathname=== "/liked"){
        deleteVideoFromLiked({_id,dispatch,userID,token})
    }
}

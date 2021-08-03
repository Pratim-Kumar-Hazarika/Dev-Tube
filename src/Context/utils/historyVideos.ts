import { Dispatch } from "react";

export async function historyVideoHandler(_id:string,dispatch:Dispatch<{type:"HISTORY_VIDEOS";payload:{videoId:string}}>){
    dispatch({type:"HISTORY_VIDEOS",payload:{videoId:_id}})
    
}
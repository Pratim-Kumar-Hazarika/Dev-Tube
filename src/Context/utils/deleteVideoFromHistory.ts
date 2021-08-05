import axios from "axios";
import { Dispatch } from "react";
import { ACTION } from "../reducers/video.reducer";

export type DeleteVideoFromHistory = {
    _id:string;
    dispatch :Dispatch<ACTION>;
    userID:string;
    token:string;
}
export async function deleteVideoFromHistory({_id,dispatch,userID,token}:DeleteVideoFromHistory){
    try {
        const response = await axios.post(`${process.env.REACT_APP_LOCAL_HOST}/user/${userID}/history/video/delete`,{
            _id:_id
        },{
            headers:{
                authorization:token
            }
        })
        if(response.status === 200){
            dispatch({type:"DELETE_HISTORY_VIDEO",payload:{videoId:_id}})
        }

    } catch (error) {
       console.log("video not deleted from liked") 
    }
}
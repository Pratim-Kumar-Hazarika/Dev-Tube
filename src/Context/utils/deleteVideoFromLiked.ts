import axios from "axios";
import { Dispatch } from "react";
import { ACTION } from "../reducers/video.reducer";

export type DeleteVideoFromLiked = {
    _id:string;
    dispatch :Dispatch<ACTION>;
    userID:string;
    token:string;
}
export async function deleteVideoFromLiked({_id,dispatch,userID,token}:DeleteVideoFromLiked){
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/liked/video/delete`,{
            _id:_id
        },{
            headers:{
                authorization:token
            }
        })
        if(response.status === 200){
            dispatch({type:"DELETE_LIKED_VIDEO",payload:{videoId:_id}});
        }

    } catch (error) {
       console.log("video not deleted from liked") 
    }
}
import axios from "axios";
import { Dispatch } from "react";
import { ACTION } from "../reducers/video.reducer";


export type GetLikedVideosFromServer = {
    dispatch :Dispatch<ACTION>;
    token:string;
    userID:string
}
export function getUserLikedVideosFromServer({dispatch,token,userID}:GetLikedVideosFromServer): void {
    (async function () {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/${userID}/liked/video`,{
                headers:{
                    authorization:token
                }
            });
          
            if (response.status === 200) {
                dispatch({ type: "LIKED_VIDEOS_FROM_SERVER", payload: { likedVideos:response.data.getUserVideos.likedVideos} });            
            }
            return response.data.videos;
        } catch (error) {
            console.log("error while getting all the videos from server");
        }
    })();
}
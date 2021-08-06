import axios from "axios";
import { Dispatch } from "react";
import { ACTION } from "../reducers/video.reducer";

export type GetHistoryVideosFromServer = {
    dispatch :Dispatch<ACTION>;
    token:string;
}
export function getUserHistoryVideosFromServer({dispatch,token}:GetHistoryVideosFromServer): void {
    (async function () {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/history/video`,{
                headers:{
                    authorization:token
                }
            });
            if (response.status === 200) {
                dispatch({ type: "HISTORY_VIDEOS_FROM_SERVER", payload: { historyVideos:response.data.getUserVideos.historyVideos} });            
            }
            return response.data.videos;
        } catch (error) {
           return error;
        }
    })();
}
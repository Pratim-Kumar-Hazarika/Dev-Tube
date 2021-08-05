import axios from "axios";
import { Dispatch } from "react";
import { Video, VideosFromServer } from "../reducers/video.reducer.types";


export function getVideosFromServer(dispatch: Dispatch<{ type: "VIDEOS_FROM_SERVER"; payload: { allVideos: Video[] } }>): void {
    (async function () {
        try {
            const response = await axios.get<VideosFromServer>(`${process.env.REACT_APP_SERVER_URL}/video`);
            if (response.status === 200) {
                dispatch({ type: "VIDEOS_FROM_SERVER", payload: { allVideos: response.data.videos } });
            }
            return response.data.videos;
        } catch (error) {
            console.log("error while getting all the videos from server");
        }
    })();
}
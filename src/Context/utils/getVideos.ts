import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { Video, VideosFromServer } from "../reducers/video.reducer.types";


export function getVideosFromServer(dispatch: Dispatch<{ type: "VIDEOS_FROM_SERVER"; payload: { allVideos: Video[] } }>,setLoader:Dispatch<SetStateAction<boolean>>): void {
    (async function () {
        setLoader(true)
        try {
            const response = await axios.get<VideosFromServer>(`${process.env.REACT_APP_SERVER_URL}/video`);
            if (response.status === 200) {
                setLoader(false)
                dispatch({ type: "VIDEOS_FROM_SERVER", payload: { allVideos: response.data.videos } });
            }
            return response.data.videos;
        } catch (error) {
            setLoader(false)
           return error;
        }
    })();
}
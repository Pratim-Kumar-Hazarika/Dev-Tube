import { Dispatch ,SetStateAction} from 'react';
import { ReducerInitialState } from "../reducers/video.reducer.types";

type LikeUnlikeColorHandler = {
    state:ReducerInitialState;
    setDislikedVideo :Dispatch<SetStateAction<boolean>>;
    setLikedVideo :Dispatch<SetStateAction<boolean>>;
    _id:string
}

export function likeUnlikeColorHandler({state,setDislikedVideo,setLikedVideo,_id}:LikeUnlikeColorHandler) {
    const videoLiked = state.likedVideos.filter((video) => video._id === _id);
    const videoDisliked = state.dislikedVideos.filter((video) => video._id === _id);
    videoLiked.length === 1 ? setLikedVideo(true) : setLikedVideo(false);
    videoDisliked.length === 1 ? setDislikedVideo(true) : setDislikedVideo(false);
}
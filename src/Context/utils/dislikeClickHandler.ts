import { Location, State } from 'history';
import { Dispatch } from 'react';
import { ACTION } from '../reducers/video.reducer';
import { deleteVideoFromLiked } from './deleteVideoFromLiked';

export type DeleteVideo= {
    _id:string;
    dispatch:Dispatch<ACTION>;
    userID:string;
    token:string;
}

export async function dislikeClickHandler({_id,dispatch,userID,token}:DeleteVideo){
    dispatch({type:"DISLIKE_CLICK_HANDLER",payload:{videoId:_id}})
    deleteVideoFromLiked({_id,dispatch,userID,token})  
}
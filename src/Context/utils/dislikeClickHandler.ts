import { Location, State } from 'history';
import { Dispatch, SetStateAction } from 'react';
import { ACTION } from '../reducers/video.reducer';
import { deleteVideoFromLiked } from './deleteVideoFromLiked';

export type DeleteVideo= {
    _id:string;
    dispatch:Dispatch<ACTION>;
    userID:string;
    token:string;
    setShowSignInModel:Dispatch<SetStateAction<boolean>>;
    setBgOpacity:Dispatch<SetStateAction<boolean>>;
}

export async function dislikeClickHandler({_id,dispatch,userID,token,setShowSignInModel,setBgOpacity}:DeleteVideo){
    if(token){
        dispatch({type:"DISLIKE_CLICK_HANDLER",payload:{videoId:_id}})
        deleteVideoFromLiked({_id,dispatch,userID,token})  
    }else{
        setShowSignInModel(true)
        setBgOpacity(true)
    }

}
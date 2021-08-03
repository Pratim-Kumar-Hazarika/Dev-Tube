import { Dispatch } from 'react';

export async function dislikeClickHandler(_id:string,dispatch:Dispatch<{type:"DISLIKE_CLICK_HANDLER";payload:{videoId:string}}>){
    dispatch({type:"DISLIKE_CLICK_HANDLER",payload:{videoId:_id}})
     
}
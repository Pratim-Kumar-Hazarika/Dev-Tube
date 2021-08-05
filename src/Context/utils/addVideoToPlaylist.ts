import axios from 'axios';
import { Dispatch } from 'react';
import { ACTION } from '../reducers/video.reducer';
import { ReducerInitialState } from './../reducers/video.reducer.types';

export type AddToPlaylist = {
    playlistName :string;
    state : ReducerInitialState;
    _id:string;
    dispatch:Dispatch<ACTION>,
    userID:string;
    token:string
}

export async function addVideoToPlaylist( {playlistName,state,_id,dispatch,userID,token} :AddToPlaylist){
    const getPlaylist = state.playlists.filter((playlist)=>playlist.name === playlistName)
    const checkVideoIfInPlaylist = getPlaylist[0].video.filter((video)=>video._id === _id)
    if(checkVideoIfInPlaylist.length <1){
        try {
            const response = await axios.post(`${process.env.REACT_APP_LOCAL_HOST}/user/${userID}/playlists/video`,{
                name:playlistName,
                videoId:_id
            },{
                headers:{
                    authorization:token
                }
            })
            if(response.status === 200){
            dispatch({type:"ADD_VIDEO_TO_PLAYLIST",payload:{playlistName:playlistName,videoId:_id}})
            }
        } catch (error) {
           console.log("video not added to playlist") 
        }    
    } 
  }
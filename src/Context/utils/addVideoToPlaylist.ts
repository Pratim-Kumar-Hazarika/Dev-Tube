import { Dispatch } from 'react';
import { ACTION } from '../reducers/video.reducer';
import { ReducerInitialState } from './../reducers/video.reducer.types';

export type AddToPlaylist = {
    playlistName :string;
    state : ReducerInitialState;
    _id:string;
    dispatch:Dispatch<ACTION>
}

export async function addVideoToPlaylist( {playlistName,state,_id,dispatch} :AddToPlaylist){
    const getPlaylist = state.playlists.filter((playlist)=>playlist.name === playlistName)
    const checkVideoIfInPlaylist = getPlaylist[0].video.filter((video)=>video._id === _id)
    if(checkVideoIfInPlaylist.length <1){
     return dispatch({type:"ADD_VIDEO_TO_PLAYLIST",payload:{playlistName:playlistName,videoId:_id}})        
    } 
  }
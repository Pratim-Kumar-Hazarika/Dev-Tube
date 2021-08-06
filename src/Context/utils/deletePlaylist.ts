import { ACTION } from './../reducers/video.reducer';
import { Dispatch } from 'react';
import axios from 'axios';
export type DeletePlaylist = {
    name:string;
    dispatch :Dispatch<ACTION>;
    userID:string;
    token:string;
}

export async function deletePlaylistClickHandler({name,dispatch,userID,token}:DeletePlaylist){
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/playlists/delete`,{
            name:name
        },{
            headers:{
                authorization:token
            }
        })
        if(response.status === 200){
            dispatch({type:"DELETE_ENTIRE_PLAYLIST",payload:{playlistName:name}});
        }
    } catch (error) {
        console.log("Error occured while deleting the playlist")
    }
    
  }
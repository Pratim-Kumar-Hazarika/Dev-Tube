import axios from 'axios';
import { Dispatch ,SetStateAction} from 'react';

type CreatePlaylist = {
    dispatch :Dispatch<{type:"ADD_PLAYLIST";payload:{playlistName:string}}>;
    playlistInput:string;
    setPlaylistInput:Dispatch<SetStateAction<string>>;
    userID:string;
    token:string
}

export async function createPlaylistClickHandler({dispatch,playlistInput,setPlaylistInput,userID,token}:CreatePlaylist){
    if(playlistInput !== ""){
      try {
        const response = await axios.post(`${process.env.REACT_APP_LOCAL_HOST}/user/${userID}/playlists`,{
          name :playlistInput
        },
        {
            headers:{
              authorization:token
            }
          })
        if(response.status === 200){
          dispatch({type:"ADD_PLAYLIST",payload:{playlistName:playlistInput}})
          setPlaylistInput('')
        }
      } catch (error) {
        console.log("Playlist not created")
      }
    }
  }
import { Dispatch ,SetStateAction} from 'react';

type CreatePlaylist = {
    dispatch :Dispatch<{type:"ADD_PLAYLIST";payload:{playlistName:string}}>;
    playlistInput:string;
    setPlaylistInput:Dispatch<SetStateAction<string>>
}

export async function createPlaylistClickHandler({dispatch,playlistInput,setPlaylistInput}:CreatePlaylist){
    if(playlistInput !== ""){
      dispatch({type:"ADD_PLAYLIST",payload:{playlistName:playlistInput}})
      setPlaylistInput('')
    }
  }
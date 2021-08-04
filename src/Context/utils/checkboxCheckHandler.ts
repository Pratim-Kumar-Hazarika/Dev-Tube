import { ReducerInitialState } from './../reducers/video.reducer.types';
export type CheckboxCheckHandler = {
    playlistName:string;
    _id:string;
    state:ReducerInitialState
}

export function checkboxCheckHandler({playlistName,_id,state}:CheckboxCheckHandler){
    const getParticularPlaylist = state.playlists.filter((playlist)=>playlist.name === playlistName)
    if(getParticularPlaylist[0].video.find((video)=>video._id === _id)){
      return true
    }return false
  }
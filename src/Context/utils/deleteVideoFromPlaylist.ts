import { Dispatch } from "react"
import { ACTION } from "../reducers/video.reducer"

export type DeleteVideoFromPlaylist = {
    playlistName :string;
    _id:string;
    dispatch:Dispatch<ACTION>
}
export function deleteVideoFromPlaylist({playlistName,_id,dispatch}:DeleteVideoFromPlaylist){
        
    dispatch({type:"DELETE_VIDEO_FROM_PLAYLIST",payload:{playlistName:playlistName,videoId:_id}})
}
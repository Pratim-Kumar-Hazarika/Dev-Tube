import axios from "axios"
import { Dispatch } from "react"
import { ACTION } from "../reducers/video.reducer"

export type DeleteVideoFromPlaylist = {
    playlistName :string;
    _id:string;
    dispatch:Dispatch<ACTION>;
    userID:string;
    token:string;
}
export async function deleteVideoFromPlaylist({playlistName,_id,dispatch,userID,token}:DeleteVideoFromPlaylist){
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/playlists/video/delete`,{
                name:playlistName,
                videoId:_id
            },{
                headers:{
                    authorization:token
                }
            })
            if(response.status === 200){
                dispatch({type:"DELETE_VIDEO_FROM_PLAYLIST",payload:{playlistName:playlistName,videoId:_id}})
            }
        } catch (error) {
            console.log("video not deleted from playlist")
        }
  
}
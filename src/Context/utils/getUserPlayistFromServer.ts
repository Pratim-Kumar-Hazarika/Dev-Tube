import axios from "axios";
import { Dispatch } from "react";
import { ACTION } from "../reducers/video.reducer";


export type GetPlaylistFromServer = {
    dispatch :Dispatch<ACTION>;
    token:string;
}
export function getUserPlaylistFromServer({dispatch,token}:GetPlaylistFromServer): void {
    (async function () {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/playlists`,{
                headers:{
                    authorization:token
                }
            });
            const userPlaylist = response.data.getUserPlaylists.playlists.map((item:any)=>(
                {
                    name:item.name,
                    video:item.video
                }
            ))
            const userPlaylistNames = response.data.getUserPlaylists.playlists.map((item:any)=>(item.name))
            if (response.status === 200) {
                dispatch({ type: "PLAYLIST_FROM_SERVER", payload: { playlists:userPlaylist,playlistNames:userPlaylistNames } }); 
            }
            return response.data.videos;
        } catch (error) {
            return error;
        }
    })();
}
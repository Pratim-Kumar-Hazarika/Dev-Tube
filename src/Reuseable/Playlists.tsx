import "../CSS/Playlist.css"
import React from 'react'
import { Link } from 'react-router-dom'
import { IonMdTrash } from "../Svgs/Svg"
import { useVideo } from "../Context/VideoProvider"
import { deleteVideoFromPlaylist } from "../Context/utils/deleteVideoFromPlaylist"
import { useAuth } from "../Context/AuthProvider"



export type PlaylistProps = {
    _id :string;
    thumbnail:string;
    image:string;
    name: string;
    views:string;
    playlistName:string
}
export const Playlists: React.FC<PlaylistProps> = ({_id,thumbnail,image,name,playlistName}) => {
    const {dispatch} = useVideo()
    const {userID,token} = useAuth()
   
    return (
        <div className="playlist_row">
        <div style={{ height: "100%" }}>
          <Link to={`/video/${_id}`}>
            <img
              className="video_image"
              src={thumbnail}
              alt="video_image"
            />
          </Link>
          <div className="video_text">
            <div>
               <img src={image}  alt="Avatar" className="avatar"/>
            </div>
            <div  className="video_name_trash_icon" >
              <div className="playlist_video_text">
                {name.slice(0,25) + "..."}
              </div>
              <div className="trash" onClick={()=>deleteVideoFromPlaylist({playlistName,_id,dispatch,userID,token})}><IonMdTrash/></div>
            </div>
          </div>
        </div>
      </div>
    )
}
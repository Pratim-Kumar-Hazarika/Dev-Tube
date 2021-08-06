import "../Rows/Row.css";
import { useVideo } from "../../Context/VideoProvider";
import { Playlists } from "../../Reuseable/Playlists";
import "../../CSS/Playlist.css"
import { IonMdTrash } from "../../Svgs/Svg";
import { deletePlaylistClickHandler } from "../../Context/utils/deletePlaylist";
import { useAuth } from "../../Context/AuthProvider";
import {ReactComponent as HeroImage} from "../../Svgs/playlist.svg"
export function PlaylistlistRow() {
const {state,dispatch} = useVideo()
const {userID,token} = useAuth()

  return (
    <div className="rows">
      <div >
        <div style={{fontSize:"2rem",marginTop:"2rem"}}>Your Playlist {state.playlists.length <1 && <span >is Empty</span>}</div>
        {
          state.playlists.map((playlist)=>{
            const {name} = playlist
            return <>
            <div className="playlist_delete">
            <div className="playlist_name_delete">{playlist.name}</div>
            <div className="icon_size" onClick={()=>deletePlaylistClickHandler({name,dispatch,userID,token})}>
            <IonMdTrash />
            </div>
            </div>
            <div className="row-1">
             <div className="flex">
              {
                  playlist.video.map((item)=>{
                      const {_id,thumbnail,image,views,name} = item
                      return <Playlists key={_id} _id={_id} playlistName={playlist.name} thumbnail={thumbnail} image={image} name={name} views={views}/>
                  })
              }
              </div>
             </div>
            </>
          })
        }
         {
          state.playlists.length <1 &&   <div className="hero_image_div">          
          <HeroImage className="hero_svg"/>
          </div>
        }
      </div>
    </div>
  );
}
import "../Rows/Row.css";
import { useVideo } from "../../Context/VideoProvider";
import { Playlists } from "../../Reuseable/Playlists";
import "../../CSS/Playlist.css"
import { IonMdTrash } from "../../Svgs/Svg";
export function PlaylistlistRow() {
const {state,dispatch} = useVideo()
function deletePlaylistClickHandler(name:string){
  console.log(name)
  dispatch({type:"DELETE_ENTIRE_PLAYLIST",payload:{playlistName:name}})
}
  return (
    <div className="rows">
      <div >
        <span style={{fontSize:"2rem"}}>Your Playlists</span>
        {
          state.playlists.map((playlist)=>{
            const {name} = playlist
            return <>
            <div className="playlist_delete">
            <div className="playlist_name_delete">{playlist.name}</div>
            <div className="icon_size" onClick={()=>deletePlaylistClickHandler(name)}>
            <IonMdTrash />
            </div>
            </div>
            <div className="row-1">
             <div className="flex">
              {
                  playlist.video.map((item)=>{
                      const {_id,thumbnail,image,views,name} = item
                      return <Playlists _id={_id} playlistName={playlist.name} thumbnail={thumbnail} image={image} name={name} views={views}/>
                  })
              }
              </div>
             </div>
            </>
          })
        }
      </div>
    </div>
  );
}
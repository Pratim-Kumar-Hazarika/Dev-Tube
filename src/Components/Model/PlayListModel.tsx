import React, { useState } from 'react'
import { createPlaylistClickHandler } from '../../Context/utils/createPlaylist'
import { useVideo } from '../../Context/VideoProvider'

export const PlayListModel: React.FC<{_id:string}> = ({_id}) => {
    const {state,dispatch,bgopacity,setBgOpacity,show,setShow} = useVideo()
    const [playlistInput,setPlaylistInput] = useState('')
     
    function idMatcherForCheckBox(playlistName:string){
        const getParticularPlaylist = state.playlists.filter((playlist)=>playlist.name === playlistName)
        if(getParticularPlaylist[0].video.find((video)=>video._id === _id)){
          return true
        }return false
      }
      function addVideoToPlaylist( playlistName:string ){
          dispatch({type:"ADD_VIDEO_TO_PLAYLIST",payload:{playlistName:playlistName,videoId:_id}})
          console.log("yo video added bitch")
      }
      function closeModelHandler(){
        setShow(false)
        setBgOpacity(false)
      }
    return (
        <div className="model" style={{ display: show ? "" : "none",opacity :bgopacity ?"1":"1" }}>
        <div className="model_save_div">
          <h3>Save To..</h3>
          <button className="model_close_btn" onClick={closeModelHandler}>
            <span className="iconify closeIconify" data-icon="akar-icons:cross" data-inline="false"></span>
          </button>
        </div>
        {state.playlistNames.map((playlistName) => (
        <div className="input1">
          <input type="checkbox" 
           checked={idMatcherForCheckBox(playlistName)}
            onChange={()=>addVideoToPlaylist(playlistName)} />
  
          <div style={{cursor:"pointer"}} >
            <span className="iconify crossIcon" data-icon="mdi:close-box" data-inline="false"></span>
          </div>
          <label className="playlist_name"> {playlistName} </label>
        </div>
        )
        )}
        <div className="add_model">
          <input className="add_playlist_input_box" type="input"  placeholder="New Playlist"  value={playlistInput}
            onChange={(e)=>setPlaylistInput(e.target.value)} />
          <button className="create_btn" onClick={()=>createPlaylistClickHandler({dispatch,playlistInput,setPlaylistInput})}>
            CREATE
          </button>
        </div>
      </div>
    )
}
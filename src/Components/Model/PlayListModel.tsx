import React, { useState } from 'react'
import { addVideoToPlaylist } from '../../Context/utils/addVideoToPlaylist'
import { checkboxCheckHandler } from '../../Context/utils/checkboxCheckHandler'
import { createPlaylistClickHandler } from '../../Context/utils/createPlaylist'
import { deleteVideoFromPlaylist } from '../../Context/utils/deleteVideoFromPlaylist'

import { useVideo } from '../../Context/VideoProvider'
import { EntypoSquaredCross, RadixIconsCross2 } from '../../Svgs/Svg'

export const PlayListModel: React.FC<{_id:string}> = ({_id}) => {
    const {state,dispatch,bgopacity,setBgOpacity,show,setShow} = useVideo()
    const [playlistInput,setPlaylistInput] = useState('')
      function closeModelHandler(){
        setShow(false)
        setBgOpacity(false)
      }
    return (
        <div className="model" style={{ display: show ? "" : "none",opacity :bgopacity ?"1":"1" }}>
        <div className="model_save_div">
          <h3>Save To..</h3>
          <button className="model_close_btn" onClick={closeModelHandler}>
            <RadixIconsCross2 className="iconify closeIconify"/>
          </button>
        </div>
        {state.playlistNames.map((playlistName) => (
        <div className="input1">
          <input type="checkbox" 
           checked={checkboxCheckHandler({playlistName,_id,state})}
            onChange={()=>addVideoToPlaylist({playlistName,state,_id,dispatch})} />
          <div style={{cursor:"pointer"}} onClick={() =>deleteVideoFromPlaylist({playlistName,_id,dispatch})}>
            <EntypoSquaredCross className="iconify crossIcon"/>
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
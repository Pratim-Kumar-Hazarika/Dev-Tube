import React from 'react'
import {useVideo} from '../../Context/VideoProvider'
import {MdiPlaylistPlus} from '../../Svgs/Svg'

export const PlaylistController : React.FC < {} > = () => {
    const {setShow, setBgOpacity} = useVideo()
    function showModelHandler() {
        setShow(true)
        setBgOpacity(true)
    }

    return (
        <div onClick={showModelHandler} className="like_items">
            <MdiPlaylistPlus className="iconify playvideoIcons"/>
            <span className="numbers">SAVE</span>
        </div>
    )
}
import React from 'react'
import { useAuth } from '../../Context/AuthProvider'
import {useVideo} from '../../Context/VideoProvider'
import {MdiPlaylistPlus} from '../../Svgs/Svg'

export const PlaylistController : React.FC < {} > = () => {
    const {setShow, setShowSignInModel,setBgOpacity} = useVideo()
    const {token} = useAuth()
    function showModelHandler() {
        if(token){
            setShow(true)
            setBgOpacity(true)
        }else{
            setShowSignInModel(true)
             setBgOpacity(true)
        }
    }

    return (
        <div onClick={showModelHandler} className="like_items">
            <MdiPlaylistPlus className="iconify playvideoIcons"/>
            <span className="numbers">SAVE</span>
        </div>
    )
}
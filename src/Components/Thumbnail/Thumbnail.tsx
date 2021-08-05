import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { useAuth } from '../../Context/AuthProvider'
import { deleteVideoClickHandler } from '../../Context/utils/deletVideoClickHandler'
import { useVideo } from '../../Context/VideoProvider'
import {IonMdTrash} from '../../Svgs/Svg'

export type ThumbnailProps = {
    name: string;
    artist: string;
    thumbnail: string;
    _id: string;
}

export const Thumbnail : React.FC < ThumbnailProps > = ({name, artist, thumbnail, _id}) => {
    const state = useLocation();
    const {dispatch} = useVideo();
    const {userID,token} = useAuth()
    return (
        <>
        <div className="video_div">
            <div className="thumbnail_img_div">
                <Link to={{
                    pathname: `/video/${_id}`
                }}>
                    <img className="thumbnail_img" src={thumbnail} alt="thumbnail"/>
                </Link>
            </div>
            <div className="video_name_artist">
                <h3 style={{color:"white"}}>{name}
                </h3>
                <span>
                    {artist}
                    ♪</span>
                <div onClick={()=>deleteVideoClickHandler({_id,state,dispatch,userID,token})} ><IonMdTrash className="dustbinIcon"/></div>
            </div>
        </div>
        </>
    )
}
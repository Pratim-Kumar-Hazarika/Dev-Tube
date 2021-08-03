import React from 'react'
import { dislikeClickHandler } from '../../Context/utils/dislikeClickHandler'
import { useVideo } from '../../Context/VideoProvider'
import { MdiThumbDown } from '../../Svgs/Svg'

export const UnlikeController : React.FC < {_id:string} > = ({_id}) => {
    const {dispatch,dislikedVideo} = useVideo()
    return (
        <div className="like_items" onClick={() => dislikeClickHandler(_id, dispatch)}>
            <MdiThumbDown
                className="iconify playvideoIcons"
                style={{
                color: dislikedVideo
                    ? "#3EA6ff"
                    : ""
            }}/>
            <span className="numbers">21k</span>
        </div>
    )
}
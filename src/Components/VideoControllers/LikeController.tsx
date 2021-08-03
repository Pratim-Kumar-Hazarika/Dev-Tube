import React from 'react'
import { likeClickHandler } from '../../Context/utils/likeClickHandler'
import { useVideo } from '../../Context/VideoProvider'
import { IcRoundThumbUp } from '../../Svgs/Svg'

export const LikeController: React.FC<{_id:string}> = ({_id}) => {
    const {dispatch,likedVideo} = useVideo()
    return (
        <div className="like_items" onClick={()=>likeClickHandler(_id, dispatch)}>
        <IcRoundThumbUp className="iconify playvideoIcons" style={{
                color: likedVideo
                    ? "#3EA6ff"
                    : ''
            }} />
        <span className="numbers">31k</span>
      </div>
    )
}
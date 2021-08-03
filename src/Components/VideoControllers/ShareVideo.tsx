import React from 'react'
import { IonMdShareAlt } from '../../Svgs/Svg'

export const ShareVideo : React.FC < {} > = () => {
    return (
        <div className="like_items">
            <IonMdShareAlt className="iconify playvideoIcons"/>
            <span className="numbers">SHARE</span>
        </div>
    )
}
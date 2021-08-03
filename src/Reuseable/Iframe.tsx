import React from 'react'

export const Iframe: React.FC<{url:string}> = ({url}) => {
    return (
        <iframe
        frameBorder="0"
        className="videoPlayingScreen"
        src={`${url}?autoplay=1&mute=1"`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    )
}

export default Iframe;

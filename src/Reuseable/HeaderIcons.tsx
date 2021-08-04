import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { IconoirSunLight, IcRoundExplore, IcRoundThumbUp, MdiHistory, MdiHome, MdiPlaylistPlus } from '../Svgs/Svg'

export default function HeaderIcons() {
    const navigate = useNavigate()
    return (
        <div>
        <div className="header_iconifys ">
            <div className="hide_header_icons">
                <Link to="/">
                    <MdiHome className="nav_icons"/>
                </Link>
            </div>
            <div className="hide_header_icons">
                <Link to="/explore">
                    <IcRoundExplore className="nav_icons"/>
                </Link>
            </div>

            <div className="hide_header_icons">
                <Link to="/liked">
                    <IcRoundThumbUp className="nav_icons"/>
                </Link>
            </div>

            <div className="hide_header_icons">
                <Link to="/history">
                    <MdiHistory className="nav_icons"/>
                </Link>
            </div>

            <div className="hide_header_icons">
                <Link to="/playlist">
                    <MdiPlaylistPlus className="nav_icons"/>
                </Link>
            </div>

            <div >
                <IconoirSunLight className="nav_icons"/>
            </div>
            <div>
                <button onClick={() => navigate("/login")} className="homebtn">LOG IN</button>
            </div>
        </div>
    </div>
    )
}

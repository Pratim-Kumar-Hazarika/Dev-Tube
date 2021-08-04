import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider';
import { IconoirSunLight, IcRoundExplore, IcRoundThumbUp, MdiHistory, MdiHome, MdiPlaylistPlus } from '../Svgs/Svg'

export default function HeaderIcons() {
    const navigate = useNavigate();
    const {token,signoutHandler} = useAuth()
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
                <Link to="/playlists">
                    <MdiPlaylistPlus className="nav_icons"/>
                </Link>
            </div>

            <div >
                <IconoirSunLight className="nav_icons"/>
            </div>
            <div>
            {token ? <button onClick={signoutHandler} className="homebtn ">SIGN OUT</button> :<button onClick={()=>navigate("/login")} className="homebtn ">LOG IN</button>}
            </div>
        </div>
    </div>
    )
}

import "./Header.css";
import {useLocation, useNavigate} from "react-router-dom";
import {
    IconoirSunLight,
    IcRoundExplore,
    IcRoundThumbUp,
    MdiHistory,
    MdiHome,
    MdiPlaylistPlus
} from "../../Svgs/Svg";
import {Link} from "react-router-dom";
import HeaderIcons from "../../Reuseable/HeaderIcons";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../../Context/AuthProvider";
export default function Header() {
    const navigate = useNavigate();
    const state = useLocation();
    const {videoId} = useParams();
    const [hideIcon,setHideIcon] = useState(true);
    const {signoutHandler,token} = useAuth()
    
   useEffect(() =>{
        if(state.pathname==='/'){
            setHideIcon(false)
        }
        if(state.pathname===`/video/${videoId}`){
            setHideIcon(true)
        }
   },[state.pathname])
   
    return (
        <div >
            <div
                className="navbar-div"
                style={{
                backgroundColor: "black",
                borderBottom: "3px solid whitesmoke"
            }}>
                <div className="header">
                    <div className="mt_1">
                        <span className="dev_tube_text">
                            <span className="dev_text">Dev</span>Tube</span>
                    </div>
                </div>
                <div className="head_icons" style={{display:hideIcon ?"":"none"}}>
                 <HeaderIcons/>
                </div>
                <div className="color_modes" style={{display:hideIcon ?"none":""}}>
                    <IconoirSunLight className=" nav_icons"/>
                </div>
                <div style={{display:hideIcon ?"none":""}}>
                    {token ? <button onClick={signoutHandler} className="homebtn ">SIGN OUT</button> :<button onClick={()=>navigate("/login")} className="homebtn ">LOG IN</button>}
                </div>
            </div>
        </div>
    );
}
import "./Header.css";
import {useNavigate} from "react-router-dom";
import {IconoirSunLight} from "../../Svgs/Svg";
export default function Header() {
    const navigate = useNavigate()
    return (
        <div>
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
                <div className="color_modes">
                    <IconoirSunLight className=" nav_icons"/>
                </div>
                <div>
                    <button onClick={()=>navigate("/login")} className="homebtn ">LOG IN</button>
                </div>
            </div>
        </div>
    );
}
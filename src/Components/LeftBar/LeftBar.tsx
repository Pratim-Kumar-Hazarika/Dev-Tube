import "./LeftBar.css";
import {Link} from "react-router-dom";
import {IcRoundExplore, IcRoundThumbUp, MdiHistory, MdiHome, MdiPlaylistPlus} from "../../Svgs/Svg";
export function LeftBar() {
    return (
        <div
            className="left_div"
            style={{
            backgroundColor: "black",
            borderBottom: "3px solid whitesmoke"
        }}>
            <Link to="/" style={{
                textDecoration: "none"
            }}>
                <div className="leftBarDivContents">
                    <MdiHome className=" leftbar_icons"/>
                    <span
                        style={{
                        color: "white"
                    }}
                        className="left_bar_text">
                        HOME
                    </span>
                </div>
            </Link>
            <Link
                to="/explore"
                style={{
                textDecoration: "none"
            }}>
                <div className="leftBarDivContents">
                    <IcRoundExplore className=" leftbar_icons"/>
                    <span
                        style={{
                        color: "white"
                    }}
                        className="left_bar_text">
                        EXPLORE
                    </span>
                </div>
            </Link>
            <Link
                to="/liked"
                style={{
                textDecoration: "none"
            }}>
                <div className="leftBarDivContents">
                    <IcRoundThumbUp className=" leftbar_icons"/>
                    <span
                        style={{
                        color: "white"
                    }}
                        className="left_bar_text">
                        LIKED{" "}
                    </span>
                </div>
            </Link>
            <Link
                to="/playlists"
                style={{
                textDecoration: "none"
            }}>
                <div className="leftBarDivContents">
                    <MdiPlaylistPlus className=" leftbar_icons"/>
                    <span
                        style={{
                        color: "white"
                    }}
                        className="left_bar_text">
                        PLAYLIST
                    </span>
                </div>
            </Link>
            <Link
                to="/history"
                style={{
                textDecoration: "none"
            }}>
                <div className="leftBarDivContents">
                    <MdiHistory className=" leftbar_icons"/>
                    <span
                        style={{
                        color: "white"
                    }}
                        className="left_bar_text">
                        HISTORY
                    </span>
                </div>
            </Link>
        </div>
    );
}
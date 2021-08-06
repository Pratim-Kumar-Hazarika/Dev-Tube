import "../CSS/WatchVideo.css"
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useVideo} from "../Context/VideoProvider";
import {LeftBar} from "../Components/LeftBar/LeftBar";
import {RightVerticalVideos} from "../Components/RightVerticalVideos/RightVerticalVideos";
import Header from "../Components/Header/Header";
import Iframe from "../Reuseable/Iframe";
import {likeUnlikeColorHandler} from "../Context/utils/likeUnlikeColorHandler";
import {historyVideoHandler} from "../Context/utils/historyVideos";
import {  PlayListModel } from "../Components/Model/PlayListModel";
import { LikeController } from "../Components/VideoControllers/LikeController";
import { UnlikeController } from "../Components/VideoControllers/UnlikeController";
import { PlaylistController } from "../Components/VideoControllers/PlaylistController";
import { ShareVideo } from "../Components/VideoControllers/ShareVideo";
import { useAuth } from "../Context/AuthProvider";
import { SignInMessageModel } from "../Components/Model/SignInMessageModel";

export function WatchVideo() {
const {videoId} = useParams();
const {state, dispatch,bgopacity,setDislikedVideo,setLikedVideo} = useVideo();
const itemFound = state.allVideos.filter((item) => item._id === String(videoId));
const {_id,image, views,name, url,artist} = itemFound[0] || {}
const {userID,token} = useAuth()
useEffect(() => {
  likeUnlikeColorHandler({state, setDislikedVideo, setLikedVideo, _id});
}, [state, videoId])

useEffect(() => {
  historyVideoHandler({_id, dispatch,userID,token})
}, [videoId])

return ( <>
  <Header />
  <div className="main_video_playing_screen">
    <PlayListModel _id ={_id}/>
    <SignInMessageModel/>
    <div className="leftBar">
      <LeftBar />
      </div>
      <div className="div2" style={{opacity :bgopacity ?"0.3":"1"}}>
        <div className="video">
          <Iframe url={url} />
          <div className="videoDiv">
            <div className="video_contents_">
              <h3>{name}</h3>
              <div className="view_years">
                <div className="viewsyears">
                  <span>{views}</span>
                </div>
                <div className="video_controllers">
                 <LikeController _id={_id}/>
                  <UnlikeController _id={_id}/>
                  {/* <ShareVideo/> */}
                 <PlaylistController/>
                </div>
              </div>
              <div className="avatar_avatarText">
                <div style={{
                    overflow: "hidden"
                }}>
                  <img className="image_avatar_play" src={image} alt="avatar" />
                </div>
                <span className="artist__name">{artist}
                  </span>
              </div>
            </div>
          </div>
        </div>
 
        <RightVerticalVideos />
      </div>
      <div className="extra_height"/>
      </div>
    </>);
    } 
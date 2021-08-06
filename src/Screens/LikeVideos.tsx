import "../CSS/LikedHistoryVideo.css"
import { useVideo } from "../Context/VideoProvider";
import { LeftBar } from "../Components/LeftBar/LeftBar";
import Header from "../Components/Header/Header";
import { Thumbnail } from "../Components/Thumbnail/Thumbnail";
import {ReactComponent as HeroImage} from "../Svgs/liked.svg"
export function LikedVideo() {
const {state} = useVideo()
  return (
      <>
      <Header/>
      <LeftBar/>
      
    <div className="main">
      <div className="like_history_video">
        <div className="parent_video_div">
        <div className="text" >Your Liked Videos List {state.likedVideos.length <1 && <span >is Empty</span>}</div>
          {state.likedVideos.map((item) => {
            const { _id, thumbnail, name, artist } = item;
            return (<>
              <Thumbnail key={_id} name={name} artist={artist} thumbnail={thumbnail} _id={_id}/>
              </>
            );
          })}
        </div>
        {
          state.likedVideos.length <1 &&   <div className="liked_hero_image_div">    
          <HeroImage className="liked_hero_svg"/>
          </div>
        }
      </div>
    </div>
    </>
  );
}
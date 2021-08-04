import "../CSS/LikedHistoryVideo.css"
import { useVideo } from "../Context/VideoProvider";
import { LeftBar } from "../Components/LeftBar/LeftBar";
import Header from "../Components/Header/Header";
import { Thumbnail } from "../Components/Thumbnail/Thumbnail";
export function LikedVideo() {
const {state} = useVideo()
  return (
      <>
      <Header/>
      <LeftBar/>
    <div className="main">
      <div className="like_history_video">
        <div className="parent_video_div">
        <div className="text">Liked Videos</div>
          {state.likedVideos.map((item) => {
            const { _id, thumbnail, name, artist } = item;
            return (
              <Thumbnail name={name} artist={artist} thumbnail={thumbnail} _id={_id}/>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
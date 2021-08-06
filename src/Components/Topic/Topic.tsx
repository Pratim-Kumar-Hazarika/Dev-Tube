import "./Topic.css";
import { Link } from "react-router-dom";

export type TopicTypes = {
    url:string;
    name:string;
    artist:string;
    views:string;
    image:string;
    thumbnail:string;
    id:string;
}

export default function Topic({
  url,
  name,
  artist,
  views,
  image,
  thumbnail,
  id
}:TopicTypes)  {
  return (
    <div className="ds_mainDiv">
      <div className="topic_video_contents" >
        <div className="topic_thumbnail_div">
          <Link to={{ pathname: `/video/${id}` }}>
            <img alt="artist"  src={thumbnail} className="topic_thumnail_" />
          </Link>
        </div>
        <div className="topic_titles_views_avatar" >
        <div className="ds_avatar">
        <img src={image}  alt="Avatar" className="avatar ds_avatar_img"/>
            <span className="ds_artistname">{artist} ♪</span>
          </div>
          <div className="ds_title_views">
            <div className="ds_name_div">
              <span className="ds_name">{name}</span>
            </div>
            <div className="topic_views_div">
              <span className="ds_views">{views}</span>
            </div>
            <div className="topic_artist_div">
              <span className="ds_artist">{artist} ♪</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
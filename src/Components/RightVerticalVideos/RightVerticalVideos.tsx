import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";
import { useVideo } from '../../Context/VideoProvider';

export function RightVerticalVideos() {
    const {state} = useVideo()
    const [darkMode,setdarkMode] = useState(true);
    const { pathname } = useLocation();
    const getFilteredVideos = state.allVideos.filter(
        (item) =>
          item.genre === "course1" || item.genre === "react-course" || item.genre === "typescript"
      );
      
      useEffect(() => {
        console.log("called")
        window.scrollTo(0, 0);
      }, [pathname]);
    return (
        <div className="right_div">
        {getFilteredVideos.map((item) => {
          const { _id, thumbnail, name, views, artist } = item;
          return (
            <>
              <div key={_id}>
                <div className="video_div_right">
                  <div className="thubmnail_div_right">
                    <Link to={{ pathname: `/video/${_id}` }}>
                      <img
                        className="thumbnail_img_right"
                        src={thumbnail}
                        alt="thumbnail"
                      />
                    </Link>
                  </div>
                  <div className="video_contents_right">
                    <h3 style={{ color: darkMode ? "white" : "black" }}>
                      {name}
                    </h3>
                    <span style={{ color: darkMode ? "#aaaaaa" : "#606060" }}>
                      {artist}
                    </span>
                    <div>
                      <span>
                        <span
                          style={{ color: darkMode ? "#aaaaaa" : "#606060" }}
                        >
                          {views}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
}
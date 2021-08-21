import "../Components/Rows/Row.css"
import React from 'react'
import { Link } from 'react-router-dom'
import { RowProps } from "../Components/Rows/RowsProps.types"

export const Rows: React.FC<RowProps> = ({_id,thumbnail,image,views,name}) => {
    return (
        <div className="iframe_row">
        <div style={{ height: "100%" }}>
          <Link to={`/video/${_id}`}>
            <img
            width="640" height="360"
              className="video_image"
              src={thumbnail}
              alt="video_image"
            />
          </Link>
          <div
            className="titles"
            style={{ display: "flex", position: "relative" }}
          >
            <div>
               <img src={image}  alt="Avatar" className="avatar"/>
            </div>
            <div
              className="titleviews"
              style={{
                // position:"absolute",
                right: "0",
                marginLeft: "20px",
                bottom: "0",
                marginTop: "13px"
              }}
            >
              <span style={{ marginTop: "10px" }}>
                {name}
              </span>
              <p>{views}</p>
            </div>
          </div>
        </div>
      </div>
    )
}
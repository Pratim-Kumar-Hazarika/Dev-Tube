import "./Row.css";
import { useVideo } from "../../Context/VideoProvider";
import { Rows } from "../../Reuseable/Rows";

export function Row() {
const {state} = useVideo()

  const metalBlues = state.allVideos.filter(
    (item) =>  item.genre === "hiphop/rap" || item.genre ==="hiphop"
  );
  const sobsRock = state.allVideos.filter(
    (item) => item.genre === "sobs" || item.genre === "rock"
  );
  const bluesMetal = state.allVideos.filter(
    (item) => item.genre === "blues" || item.genre === "metal"
  );
  return (
    <div className="rows">
      <div style={{marginTop:"2.5rem"}} >
        <h3>HIPHOP AND RAP</h3>
        <div className="row-1">
          <div className="flex">
              {
                  metalBlues.map((item)=>{
                      const {_id,thumbnail,image,views,name} = item
                      return <Rows _id={_id} thumbnail={thumbnail} image={image} name={name} views={views}/>
                  })
              }
          </div>
        </div>
        <h3>SAD AND ROCK</h3>
        <div className="row-1">
          <div className="flex">
              {
                  sobsRock.map((item)=>{
                      const {_id,thumbnail,image,views,name} = item
                      return <Rows _id={_id} thumbnail={thumbnail} image={image} name={name} views={views}/>
                  })
              }
          </div>
        </div>
        <h3>SAD AND ROCK</h3>
        <div className="row-1">
          <div className="flex">
              {
                  bluesMetal.map((item)=>{
                      const {_id,thumbnail,image,views,name} = item
                      return <Rows _id={_id} thumbnail={thumbnail} image={image} name={name} views={views}/>
                  })
              }
          </div>
        </div>
      </div>
    </div>
  );
}
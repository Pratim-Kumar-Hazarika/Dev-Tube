import "./Row.css";
import { useVideo } from "../../Context/VideoProvider";
import { Rows } from "../../Reuseable/Rows";

export function Row() {
const {state} = useVideo()

  const reactAndTypescript = state.allVideos.filter(
    (item) =>  item.genre === "react-course" || item.genre ==="typescript"
  );
  const graphqlAndJstalks = state.allVideos.filter(
    (item) => item.genre === "graphQl-talks" || item.genre === "js-talks"
  );
  const courseAndTeaWithTanay = state.allVideos.filter(
    (item) => item.genre === "course1" || item.genre === "teaWithTanay"
  );
  return (
    <div className="rows">
      <div style={{marginTop:"2.5rem"}} >
        <h3>REACT AND TYPESCRIPT</h3>
        <div className="row-1">
          <div className="flex">
              {
                  reactAndTypescript.map((item)=>{
                      const {_id,thumbnail,image,views,name} = item
                      return <Rows _id={_id} key={_id} thumbnail={thumbnail} image={image} name={name} views={views}/>
                  })
              }
          </div>
        </div>
        <h3>GRAPHQL AND Js TALKS</h3>
        <div className="row-1">
          <div className="flex">
              {
                  graphqlAndJstalks.map((item)=>{
                      const {_id,thumbnail,image,views,name} = item
                      return <Rows _id={_id} thumbnail={thumbnail} image={image} name={name} views={views}/>
                  })
              }
          </div>
        </div>
        <h3>COURSE 1 AND TEA WITH TANAY</h3>
        <div className="row-1">
          <div className="flex">
              {
                  courseAndTeaWithTanay.map((item)=>{
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
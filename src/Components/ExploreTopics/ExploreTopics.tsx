import "./ExploreTopics.css";
import { Link } from "react-router-dom";
import GraphQlImg from "../../assests/graphql.jpeg"
import TsImg from "../../assests/ts.jpeg"
import JsImg from "../../assests/js.jpeg";
import ReactImg from "../../assests/react.jpeg"
import TeaImg from "../../assests/tea.jpeg"
import HtmlImg from "../../assests/html.jpeg"
export default function ExploreTopics() {
  return (
    <>
      <div className="topic_main">
        <div className="topic_img_div">
        <div className="img">
          <div className="img_div">
            <Link to="/topic/course1">
              <img
              alt="tea"
                className="topic_image"
                src={HtmlImg}
              />
            </Link>
          </div>
          <div className="img_div">
            <Link to="/topic/teaWithTanay">
              <img
              alt="tea-with-tanay"
                className="topic_image"
                src={TeaImg}
              />
            </Link>
          </div>
        </div>
        <div className="img">
          <div className="img_div">
            <Link to="/topic/react-course">
              <img
              alt="reac"
                className="topic_image"
                src={ReactImg}
              />
            </Link>
          </div>
          <div className="img_div">
          <Link to="/topic/js-talks">
              <img
              alt="js"
                 className="topic_image"
                src={JsImg}
              />
            </Link>

          </div>
        </div>
        <div className="img">
          <div className="img_div">
            <Link to="/topic/typescript">
              <img
              alt="ts"
                 className="topic_image"
                src={TsImg}
              />
            </Link>
          </div>
          <div className="img_div">
          <Link to="/topic/graphQl-talks">
              <img
                className="topic_image"
                src={GraphQlImg} alt="graphql"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
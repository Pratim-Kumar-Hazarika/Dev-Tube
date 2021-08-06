import "./ExploreTopics.css";
import { Link } from "react-router-dom";
export default function ExploreTopics() {
  return (
    <>
      <div className="topic_main">
        <div className="topic_img_div">
        <div className="img">
          <div className="img_div">
            <Link to="/topic/course1">
              <img
              alt=""
                className="topic_image"
                src="https://i.ytimg.com/vi/E8cl_8ktp9M/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAhp-LrxTAmHYRtQA8q7DelDXbxHA"
              />
            </Link>
          </div>
          <div className="img_div">
            <Link to="/topic/teaWithTanay">
              <img
              alt=""
                className="topic_image"
                src="https://i.ytimg.com/vi/GDYhoRbYH3o/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB_dybtORKh5VsjNd_qTK9Fh288qg"
              />
            </Link>
          </div>
        </div>
        <div className="img">
          <div className="img_div">
            <Link to="/topic/react-course">
              <img
              alt=""
                className="topic_image"
                src="https://www.resourcifi.com/blog/wp-content/uploads/2020/09/Why-Use-React-Native-For-Your-Business-in-2020.jpg"
              />
            </Link>
          </div>
          <div className="img_div">
          <Link to="/topic/js-talks">
              <img
              alt=""
                 className="topic_image"
                src="https://miro.medium.com/max/2000/1*uZ094Kxwv_qLih3tn9AZ6Q.jpeg"
              />
            </Link>

          </div>
        </div>
        <div className="img">
          <div className="img_div">
            <Link to="/topic/typescript">
              <img
              alt=""
                 className="topic_image"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--c9q4Du_e--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://ionicframework.com/blog/wp-content/uploads/2019/02/typescript-in-react.png"
              />
            </Link>
          </div>
          <div className="img_div">
          <Link to="/topic/graphQl-talks">
              <img
                className="topic_image"
                src="https://cdn.codersociety.com/uploads/graphql-reasons.png" alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
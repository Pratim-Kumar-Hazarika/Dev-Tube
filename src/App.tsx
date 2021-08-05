import Login from './Screens/Login';
import Explore from "./Screens/Explore"
import { Route, Routes } from 'react-router';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import { WatchVideo } from './Screens/WatchVideo';
import { LikedVideo } from './Screens/LikeVideos';
import { HistoryVideo } from './Screens/HistoryVideo';
import { PlayLists } from './Screens/Playlists';
import { PrivateRoute } from './Components/PrivateRoutes/PrivateRoute';
import Topics from './Screens/Topics';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element = {<Explore/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/video/:videoId" element={<WatchVideo />} />
        <Route path = "/topic/:topicName" element={<Topics/>}/>
        <PrivateRoute path = "/liked" element={<LikedVideo/>}/>
        <PrivateRoute path = "/history" element={<HistoryVideo/>}/>
        <PrivateRoute path = "/playlists" element={<PlayLists/>}/>
      </Routes>
    </div>
  );
}

export default App;

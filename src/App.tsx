import './App.css';
import Login from './Screens/Login';
import Explore from "./Screens/Explore"
import { Route, Routes } from 'react-router';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import { WatchVideo } from './Screens/WatchVideo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element = {<Explore/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/video/:videoId" element={<WatchVideo />} />
      </Routes>
    </div>
  );
}

export default App;

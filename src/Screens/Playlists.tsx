import "../CSS/Playlist.css"
import { LeftBar } from "../Components/LeftBar/LeftBar";
import Header from "../Components/Header/Header";
import { PlaylistlistRow } from "../Components/PlaylistRow/PlaylistRow";

export function PlayLists() {
  return (
      <>
       <Header />
        <div style={{marginTop:"5rem"}}>
        <LeftBar />
         </div>
        <PlaylistlistRow/> 
        <div className="extra_height"/>
    </>
  );
}
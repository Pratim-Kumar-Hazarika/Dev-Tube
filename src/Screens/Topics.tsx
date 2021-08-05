import { useParams } from 'react-router'
import Header from '../Components/Header/Header'
import { LeftBar } from '../Components/LeftBar/LeftBar'
import Topic from '../Components/Topic/Topic'
import { useVideo } from '../Context/VideoProvider'

export default function Topics() {
    const {topicName} = useParams()
    const {state} = useVideo()
    const filteredBlues = state.allVideos.filter(
        (item) => item.genre === topicName
      );
    return (
        <>
           <Header/>
           <LeftBar/>
           <div style={{marginTop:"5rem"}}>
           {
               filteredBlues.map(({url,name,artist,views,image,thumbnail,_id})=>(
                <Topic url={url}
                name={name}
                artist={artist}
                views={views}
                image={image}
                thumbnail={thumbnail}
                id={_id}/>
               ))
           } 
           </div> 
           <div className="extra_height"/>
        </>
    )
}

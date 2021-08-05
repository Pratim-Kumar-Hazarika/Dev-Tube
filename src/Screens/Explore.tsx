import ExploreTopics from '../Components/ExploreTopics/ExploreTopics'
import Header from '../Components/Header/Header'
import { LeftBar } from '../Components/LeftBar/LeftBar'


export default function Explore() {
    return (
        <>
           <Header/> 
           <div style={{marginTop:"5rem"}}>
            <LeftBar />
           </div>
          <ExploreTopics/>
          <div className="extra_height"/>
        </>
    )
}

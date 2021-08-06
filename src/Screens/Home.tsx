import Header from '../Components/Header/Header'
import {LeftBar} from '../Components/LeftBar/LeftBar'
import {Row} from '../Components/Rows/Row'
import RingLoader from "react-spinners/RingLoader";
import { useVideo } from '../Context/VideoProvider';
export default function Home() {
const {state,loader} = useVideo();
return (
<>
    <Header />
    <div style={{marginTop:"5rem"}}>
        <LeftBar />
    </div>
    {!loader &&
    <Row />}
    {loader && <div className="loader_div">
        <RingLoader color={"white"} loading={loader} size={35} />
    </div>}
</>
)
}
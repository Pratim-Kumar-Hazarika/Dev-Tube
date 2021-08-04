import Header from '../Components/Header/Header'
import {LeftBar} from '../Components/LeftBar/LeftBar'
import {Row} from '../Components/Rows/Row'

export default function Home() {
return (
<>
    <Header />
    <div style={{marginTop:"5rem"}}>
        <LeftBar />
    </div>
    <Row />
</>
)
}
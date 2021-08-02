import LoginForm from '../Components/Login/LoginForm';
import {ReactComponent as HeroImage} from "../Svgs/devtube.svg"

export default function Login() {
    return (
        <div className="login">
            <div className="login_text bg_color">
                <div className="quote">
                    <span className="note_quote">You Never Get Bored With <span className="dev_text">Dev</span>Tube</span>
                </div>
                <div className="hero_image1">
                    <HeroImage/>
                </div>
            </div>
            <div className="login_form">
               <LoginForm/>
            </div>
        </div>
    )
}
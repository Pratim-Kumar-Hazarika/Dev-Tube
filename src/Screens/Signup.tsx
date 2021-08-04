import "../Components/Login/Login.css"
import SignupForm from "../Components/Signup/SignupForm"

import {ReactComponent as HeroImage} from "../Svgs/devtube2.svg"
export default function Signup() {
    return (
        <div className="login">
            <div className="login_text bg_color">
                <div className="quote">
                    <span className="note_quote ">Welcome to <span className="dev_text">Dev</span>Tube</span>
                </div>
                <div className="hero_image1">
                    <HeroImage/>
                </div>
            </div>
            <div className="login_form">
               <SignupForm/>
            </div>
        </div>
    )
}
import { useEffect } from "react"
import { Router, useLocation, useNavigate } from "react-router"
import { useVideo } from "../../Context/VideoProvider"
import "../../CSS/SignInModel.css"
export const SignInMessageModel: React.FC<{}> = ({}) => {
    const {setBgOpacity,bgopacity,showsignInModel,setShowSignInModel,setShow} = useVideo()
    const navigte = useNavigate()
    const pathname = useLocation()
    function loginRouteHandler(){
        navigte("/login")
        setShowSignInModel(false)
        setBgOpacity(false)
    }
    function cancelClickHandler(){
        setShowSignInModel(false)
        setBgOpacity(false)
    }
    useEffect(()=>{
        setShowSignInModel(false)
        setBgOpacity(false)
        setShow(false)
    },[pathname])
    return (
        <>
        <div className="sign_in_model" style={{ display: showsignInModel ? "" : "none",opacity :bgopacity ?"1":"1" }} >
        <div >
            <p className="delete_model_text">Premium features are available only for the registered users. If you have an account login. </p>
        </div>
        <div className="btn_div">
            <button className="sign_in_model_login_btn" onClick={loginRouteHandler}>Login</button>
            <button className="sign_in_model_cancel_btn" onClick={cancelClickHandler}>Cancel</button>
        </div>
    </div>
    </>
    )
}
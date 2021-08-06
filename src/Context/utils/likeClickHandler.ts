import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { ACTION } from "../reducers/video.reducer";

export type LikeClickHandler = {
  _id:string;
  dispatch:Dispatch<ACTION>;
  userID:string;
  token:string;
  setShowSignInModel:Dispatch<SetStateAction<boolean>>;
  setBgOpacity:Dispatch<SetStateAction<boolean>>;
}

export  async function likeClickHandler({_id,dispatch,userID,token,setShowSignInModel,setBgOpacity}:LikeClickHandler) {
    if(token){
      try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/liked/video`,{
         _id
        },{
          headers:{
            authorization:token
          }
        })
        if(response.status === 200){
          dispatch({type:"LIKE_CLICK_HANDLER",payload:{videoId :_id}})
        }
      } catch (error) {
        console.log("error occured while adding to like videos")
      }
    }else{
      setShowSignInModel(true)
      setBgOpacity(true)
    }
    
  }

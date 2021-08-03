import { Dispatch } from "react";

export  async function likeClickHandler(_id:string,dispatch: Dispatch<{ type: "LIKE_CLICK_HANDLER"; payload:{videoId :string} }>) {
   
    dispatch({type:"LIKE_CLICK_HANDLER",payload:{videoId :_id}})
    
  }

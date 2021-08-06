import axios from "axios";
import { Dispatch } from "react";
import { ACTION } from "../reducers/video.reducer";

export type HistoryHandler = {
  _id:string;
  dispatch:Dispatch<ACTION>;
  userID:string;
  token:string;
}

export  async function historyVideoHandler({_id,dispatch,userID,token}:HistoryHandler) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/history/video`,{
         _id
        },{
          headers:{
            authorization:token
          }
        })
        if(response.status === 200){
          dispatch({type:"HISTORY_VIDEOS",payload:{videoId :_id}})
        }
      } catch (error) {
        console.log("error occured while adding to history videos")
      }
  }

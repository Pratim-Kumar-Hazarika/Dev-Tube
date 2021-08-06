import { Dispatch, SetStateAction } from 'react';
import axios from "axios"

export async function getUserIdFromServer(token:string,setUserID:Dispatch<SetStateAction<string>>){
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/token`,{
            headers:{
                authorization:token
            }
        })
        setUserID(response.data.userId)
    } catch (error) {
        console.log("error while getting user id from server")

    }
    
}
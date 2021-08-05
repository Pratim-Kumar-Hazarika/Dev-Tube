import { Navigate } from 'react-router-dom';
import axios from "axios"
import { NavigateFunction } from 'react-router';

export type SignupHandler ={
    name :string;
    email:string;
    password:string;
    navigate:NavigateFunction
}
export type PostData = {
    name :string;
    password:string;
    email:string
}

export async function signUpHandler({name,email,password,navigate}:SignupHandler){
    const data :PostData = {
        name :name,
        email:email,
        password:password
    }
    try {
        const response = await axios.post(`${process.env.REACT_APP_LOCAL_HOST}/user`,data)
       if(response.status === 200){
           navigate("/login")
       }
    } catch (error) {
        console.log("Error while adding user to db",error)
    }

}
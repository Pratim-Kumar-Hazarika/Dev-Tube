import axios from "axios";

export  type Response = {
    token :string;
    userId:string
}

export type LoginData = {
    email:string;
    password:string
}

export async function loginUser(userEmail:string,userPassword:string) {
    const data :LoginData = {
        email:userEmail,
        password:userPassword
    }
    return   axios.post<Response>(`${process.env.REACT_APP_LOCAL_HOST}/user/login`,data)  
}
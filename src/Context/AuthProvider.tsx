import axios from "axios";
import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from "react";
import { useNavigate } from "react-router";
import { loginUser } from "./utils/loginUser";
import { setUserStatus } from "./utils/setUserStatus";

interface AuthContextType {
    email:string;
    setEmail:Dispatch<SetStateAction<string>>;
    password:string;
    setPassword:Dispatch<SetStateAction<string>>;
    name:string;
    setName:Dispatch<SetStateAction<string>>;
    loginUserWithCredentials:any;
    loading:boolean;
    setLoading:Dispatch<SetStateAction<boolean>>;
    userID:string;
    token:string;
    signoutHandler:()=>void
}
const AuthContext = createContext({} as AuthContextType);

export const AuthProvider : FC = ({children}) => {
  const {  token: savedToken, userId: savedUserId } = JSON.parse(localStorage.getItem("login")  || '{}')
   || {
      token: null,
      userId: null
    };
    const [token,setToken] = useState(savedToken)
    const [userID,setUserID] = useState(savedUserId)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)

   async function loginUserWithCredentials(userEmail:string,userPassword:string): Promise<void>{
        setLoading(true)
        try {
            const response = await loginUser(userEmail,userPassword);
            const {token,userId} = response.data
            if(response.status === 200){
               setUserStatus({token,userId,setToken,setUserID,navigate})
               setLoading(false)
            }
        } catch (error) {
            console.log("Error occured while logging in")
            setLoading(false)
        }
     }

        function signoutHandler(){
            localStorage.removeItem("login");
            navigate("/")
            setToken(null)
        }

    return (
        <AuthContext.Provider value={{email,setEmail,password,setPassword,name,setName,loginUserWithCredentials,loading,setLoading,userID,token,signoutHandler}}>{children}</AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}
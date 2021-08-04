import axios from "axios";
import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from "react";
import { useNavigate } from "react-router";

interface AuthContextType {
    email :string;
    setEmail:Dispatch<SetStateAction<string>>;
    password:string;
    setPassword:Dispatch<SetStateAction<string>>;
    login : boolean;
    setLogin:Dispatch<SetStateAction<boolean>>;
    loginUserWithCredentials :Promise<any>
}
const AuthContext = createContext({} as any);

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
    function loginUser(userEmail:string,userPassword:string) {
            return axios.post("the url",{
                email:userEmail,
                password:userPassword
            })
    }

    function setUserStatus({token,userId}:any){
        setToken(token)
        setUserID(userId)
        navigate("/")
        localStorage.setItem("login",JSON.stringify({token,userId}))
    }
  
   async function loginUserWithCredentials(userEmail:string,userPassword:string){
        try {
            const response = await loginUser(userEmail,userPassword);
            if(response.status === 200){
               setUserStatus(response.data)
            }
        } catch (error) {
            console.log("Error occured while logging in")
        }
   }

   function signoutHandler(){
       localStorage.removeItem("login");
       navigate("/")
       setToken(null)
   }

    return (
        <AuthContext.Provider value={{token,signoutHandler,name,setName,loginUserWithCredentials,email,setEmail,password,setPassword}}>{children}</AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}
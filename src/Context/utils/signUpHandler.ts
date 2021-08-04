export type SignupHandler ={
    name :string;
    email:string;
    password:string
}
export async function signUpHandler({name,email,password}:SignupHandler){
    console.log("name",name)
    console.log("email",email)
    console.log("passowrd",password)

}
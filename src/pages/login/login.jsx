import { useState } from "react";
import "./login.css";

export default function LoginPage(){

    const [email,setEmail] = useState(" ")
    const [password, setPassword] =useState("")

    function handleLogin(){
        console.log(email,password)
    }

    return(
        <div className="w-full h-[100vh] pic-bg flex justify-center items-center">
                <div className="w-[400px] h-[400px] backdrop-blur-md rounded-lg flex flex-col items-center justify-center relative">
                <h1 className="text-3xl p-[15px] text-white absolute top-[40px] text-center">Login</h1>

                <input type="text" placeholder="Enter your email address" className="w-[80%] bg-[#00000000] text-white placeholder:text-white  border-white border-[2px] h-[40px] px-[5px] mb-[20px]" defaultValue={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="Enter your password" className="w-[80%]  bg-[#00000000] text-white placeholder:text-white  border-white border-[2px] h-[40px] px-[5px]  "  defaultValue={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className="w-[80%] absolute bottom-[40px] bg-red-500 text-white h-[50px]" onClick={handleLogin} >Login</button>
                </div>

            </div>
    )
} 
import "./login.css";

export default function LoginPage(){
    return(
        <div className="w-full h-[100vh] pic-bg flex justify-center items-center">
                <div className="w-[400px] h-[400px] backdrop-blur-md rounded-lg flex flex-col items-center justify-center relative">
                <h1 className="text-3xl p-[15px] text-white absolute top-[40px] text-center">Login</h1>

                <input type="text" placeholder="Enter your email address" className="w-[80%] bg-[#00000000] text-white placeholder:text-white  border-white border-[2px] h-[40px] px-[5px] mb-[5px]"/>
                <input type="password" placeholder="Enter your email password" className="w-[80%]  bg-[#00000000] text-white placeholder:text-white  border-white border-[2px] h-[40px] px-[5px] mb-[5px] "/>
                <button className="w-[80%] absolute bottom-[40px] bg-red-500 text-white h-[50px]" >Login</button>
                </div>

            </div>
    )
} 
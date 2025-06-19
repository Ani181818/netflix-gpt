import Header from "./Header"
import { useState } from "react";
const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true);
    const toggleSignIn = ()=>{
        setIsSignIn(!isSignIn);
    }
    return (
        <div>
        
            <Header/>
            <div className="absolute">
            
                <div>
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg" 
                    alt="bg-logo" />
                </div>
                
            </div> 
            <form className="w-3/12 absolute p-12 bg-black/80 my-40 mx-auto right-0 left-0 text-white">
            <h1 className="font-bold text-3xl py-4">{isSignIn?"Sign In":"Sign Up"}</h1>
                {!isSignIn && <input type="text" placeholder="Full Name" className="p-4 my-4 bg-gray-700 w-full text-white"/>}
                <input type="text" placeholder="Email Address" className="p-4 my-4 bg-gray-700 w-full text-white"/>
                <input type="text" placeholder="Password" className="p-4 my-4 bg-gray-700 w-full text-white"/>
                <button className="p-4 my-4 bg-red-800 w-full rounded-lg">Sign In</button>
                <p className="p-2 cursor-pointer" onClick={toggleSignIn}>{isSignIn?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>
            </form>
       

        </div>
    )
}

export default Login
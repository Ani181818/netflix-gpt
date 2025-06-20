import { checkValidate } from "../utils/checkValidate";
import Header from "./Header"
import { useRef, useState } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignIn,setIsSignIn] = useState(true);
    const toggleSignIn = ()=>{
        setIsSignIn(!isSignIn);
    }
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [error, setError] = useState(null);
    const handleSubmit = ()=>{  
        
        const validate = checkValidate(isSignIn?null:name.current.value,email.current.value,password.current.value);
        setError(validate);
        if(validate)return;
        if(!isSignIn){
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
            displayName: name.current.value, photoURL: "https://thefederal.com/h-upload/2024/01/14/426807-kohli-laughs.webp"
            }).then(() => {
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
                navigate("/browse")
            }).catch((error) => {
                setError(error.message);
            });
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode+"-"+errorMessage)
            });

        }else{
            //sign in
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
             navigate("/browse")
            console.log(user);
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
             setError(errorCode+"-"+errorMessage)
            });
        }
        
        
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
            <form onSubmit = {(e) => e.preventDefault() } className="w-3/12 absolute p-12 bg-black/80 my-40 mx-auto right-0 left-0 text-white">
            <h1 className="font-bold text-3xl py-4">{isSignIn?"Sign In":"Sign Up"}</h1>
                {!isSignIn && <input  ref = {name} type="text" placeholder="Full Name" className="p-4 my-4 bg-gray-700 w-full text-white"/>}
                <input ref = {email} type="text" placeholder="Email Address" className="p-4 my-4 bg-gray-700 w-full text-white"/>
                <input ref = {password} type="text" placeholder="Password" className="p-4 my-4 bg-gray-700 w-full text-white"/>
                <p className="text-red-400 font-bold text-lg">{error}</p>
                <button className="p-4 my-4 bg-red-800 w-full rounded-lg" onClick={handleSubmit}>{(isSignIn)?"SignIn":"SignUp"}</button>
                <p className="p-2 cursor-pointer" onClick={toggleSignIn}>{isSignIn?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>
            </form>
       

        </div>
    )
}

export default Login
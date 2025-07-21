import { checkValidate } from "../utils/checkValidate";
import Header from "./Header"
import { useRef, useState } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, PHOTO_URL } from "../utils/constants";
const Login = () => {
    const dispatch = useDispatch();
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
            displayName: name.current.value, photoURL: PHOTO_URL
            }).then(() => {
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
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
            console.log(user)
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
                    <img src={BG_URL}
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
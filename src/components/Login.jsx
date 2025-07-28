import { checkValidate } from "../utils/checkValidate";
import Header from "./Header"
import { useRef, useState } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, PHOTO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { Play, ArrowLeft } from "lucide-react";
const Login = () => {
    const navigate = useNavigate();
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
                navigate("/browse");
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
            navigate("/browse");
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
             setError(errorCode+"-"+errorMessage)
            });
        }
        
        
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 text-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
                <img src={BG_URL} alt="background" className="w-full h-full object-cover" />
            </div>
            
            {/* Header */}
            <header className="relative z-10 p-6">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                        <span>Back to Home</span>
                    </Link>
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                            <Play className="w-5 h-5 text-white fill-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            MovieGPT
                        </span>
                    </div>
                </div>
            </header>

            {/* Login Form */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 -mt-20">
                <div className="w-full max-w-md">
                    <form 
                        onSubmit={(e) => e.preventDefault()} 
                        className="bg-black/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10"
                    >
                        <h1 className="font-bold text-3xl mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {isSignIn ? "Welcome Back" : "Join MovieGPT"}
                        </h1>
                        
                        {!isSignIn && (
                            <div className="mb-6">
                                <input  
                                    ref={name} 
                                    type="text" 
                                    placeholder="Full Name" 
                                    className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                />
                            </div>
                        )}
                        
                        <div className="mb-6">
                            <input 
                                ref={email} 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                            />
                        </div>
                        
                        <div className="mb-6">
                            <input 
                                ref={password} 
                                type="password" 
                                placeholder="Password" 
                                className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                            />
                        </div>
                        
                        {error && (
                            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                                <p className="text-red-400 text-sm">{error}</p>
                            </div>
                        )}
                        
                        <button 
                            className="w-full p-4 bg-red-600 hover:bg-red-700 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-6" 
                            onClick={handleSubmit}
                        >
                            {isSignIn ? "Sign In" : "Sign Up"}
                        </button>
                        
                        <p className="text-center text-gray-400">
                            {isSignIn ? "New to MovieGPT? " : "Already have an account? "}
                            <span 
                                className="text-red-400 hover:text-red-300 cursor-pointer font-semibold transition-colors" 
                                onClick={toggleSignIn}
                            >
                                {isSignIn ? "Sign Up Now" : "Sign In Now"}
                            </span>
                        </p>
                    </form>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-1/3 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
    )
}

export default Login
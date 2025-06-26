
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userItem = useSelector((store)=>store.user)
    const handleSignOut = ()=>{
        // Sign out logic here
        signOut(auth).then().catch(() => {
        navigate("/error")
        });

    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
        //sign in
       
        const {uid,email,displayName,photoURL} = user;
         dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
         navigate("/browse")
        } else {
        //sign out
        dispatch(removeUser())
        navigate("/")
        }
        });
        //unsubscribe when component unmounts
        return () => unsubscribe();
    },[])
    return (
        <>
        <div className="flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
           <img className = "w-44" src={LOGO} 
           alt="logo" />
            {userItem && <div className="flex w-16 p-2">
                <img className = "p-1 my-2" src={userItem.photoURL} alt="signout-logo" />
                <button onClick = {handleSignOut} className="text-white cursor-pointer">(sign out)</button>
            </div>}
        </div>
        </>
    )
}

export default Header;
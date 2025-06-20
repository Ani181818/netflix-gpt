
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
   
    const navigate = useNavigate();
    const userItem = useSelector((store)=>store.user)
    const handleSignOut = ()=>{
        // Sign out logic here
        signOut(auth).then(() => {
        navigate("/")
        }).catch(() => {
        navigate("/error")
        });

    }
    return (
        <>
        <div className="flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
           <img className = "w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
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
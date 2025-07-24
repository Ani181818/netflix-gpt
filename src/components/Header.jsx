
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { removeGptMovieList, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import NavigationBar from "./NavigationBar";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userItem = useSelector((store)=>store.user)
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleGptSearchClick = ()=> {
        dispatch(toggleGptSearchView());
        dispatch(removeGptMovieList());
    }
    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));
    };
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
         // Only navigate to browse if we're on the login page
         if (window.location.pathname === "/") {
           navigate("/browse")
         }
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
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/90 to-transparent">
          {/* Top Header Bar */}
          <div className="flex justify-between w-full px-8 py-2">
            <Link to="/browse">
              <img className="w-44" src={LOGO} alt="logo" />
            </Link>
            {userItem && (
              <div className="flex p-2">
                {showGptSearch && (
                  <select
                    className="p-2 m-2 bg-gray-900 text-white rounded"
                    onChange={handleLanguageChange}
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                )}
                <button
                  onClick={handleGptSearchClick}
                  className="cursor-pointer py-2 px-4 m-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  {showGptSearch ? "Homepage" : "GPT Search"}
                </button>
                <img
                  className="w-12 h-12 rounded-full"
                  src={userItem.photoURL}
                  alt="user-avatar"
                />
                <button
                  onClick={handleSignOut}
                  className="text-white cursor-pointer font-bold ml-2 hover:text-red-400 transition-colors"
                >
                  (sign out)
                </button>
              </div>
            )}
          </div>
          
          {/* Navigation Bar - Only show when not in GPT Search mode and user is logged in */}
          {userItem && !showGptSearch && (
            <NavigationBar />
          )}
        </div>
      </>
    );
}

export default Header;

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { removeGptMovieList, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import NavigationBar from "./NavigationBar";
import { Play, LogOut } from "lucide-react";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
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
        navigate("/")
        });

    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
        //sign in
       
        const {uid,email,displayName,photoURL} = user;
         dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
         // Only navigate to browse if we're on the login page
         if (window.location.pathname === "/login") {
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
    const isWatchlistPage = location.pathname === "/watchlist";
    return (
      <>
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/90 to-transparent">
          {/* Single Header Bar with Logo, Navigation, and User Controls */}
          <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-8 py-2">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
              <Link to="/browse">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <Play className="w-3 h-3 sm:w-5 sm:h-5 text-white fill-white" />
                  </div>
                  <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    MovieGPT
                  </span>
                </div>
              </Link>
              
              {/* Navigation Bar - Only show when not in GPT Search mode and user is logged in */}
              {userItem && !showGptSearch && (
                <NavigationBar />
              )}
            </div>

            {/* Right side - User Controls */}
            {userItem && (
              <div className="flex items-center p-1 sm:p-2">
                {/* Hide GPT Search and language selector on Watchlist page */}
                {!isWatchlistPage && showGptSearch && (
                  <select
                    className="p-1 sm:p-2 m-1 sm:m-2 bg-gray-900 text-white rounded text-xs sm:text-sm"
                    onChange={handleLanguageChange}
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                )}
                {!isWatchlistPage && (
                  <button
                    onClick={handleGptSearchClick}
                    className="cursor-pointer py-1 sm:py-2 px-2 sm:px-4 m-1 sm:m-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-xs sm:text-sm"
                  >
                    {showGptSearch ? "Homepage" : "GPT Search"}
                  </button>
                )}
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-600 hover:border-red-500 transition-colors duration-200"
                  src={userItem.photoURL}
                  alt="user-avatar"
                />
                <button
                  onClick={handleSignOut}
                  className="ml-2 sm:ml-3 flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white rounded-lg transition-all duration-200 text-xs sm:text-sm font-medium border border-gray-700 hover:border-red-500"
                >
                  <LogOut className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Sign Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
}

export default Header;
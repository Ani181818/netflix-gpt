
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { removeGptMovieList, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
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
          <img className="w-44" src={LOGO} alt="logo" />
          {userItem && (
            <div className="flex  p-2">
              {showGptSearch && (
                <select
                  className="p-2 m-2 bg-gray-900 text-white"
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
                className="cursor-pointer py-2 px-2 m-2 bg-red-500 text-white rounded-lg"
              >
                {showGptSearch ? "Homepage" : "GPT Search"}
              </button>
              <img
                className="w-12 h-12"
                src={userItem.photoURL}
                alt="signout-logo"
              />
              <button
                onClick={handleSignOut}
                className="text-white cursor-pointer font-bold"
              >
                (sign out)
              </button>
            </div>
          )}
        </div>
      </>
    );
}

export default Header;
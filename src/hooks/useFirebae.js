import {  useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});

  //useEffect(() => {}, []);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };

  //   return [user,setUser];
  return { user, signInWithGoogle, setUser };
};

export default useFirebase;

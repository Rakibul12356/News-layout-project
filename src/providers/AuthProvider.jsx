import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../../firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading] = useState(true)
    const auth = getAuth(app);
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

 const logInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }

    useEffect(()=>{
    const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
            console.log('user in the auth state change ',currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logOut,
        logInUser,
        loading
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
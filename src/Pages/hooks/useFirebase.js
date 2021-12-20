import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,updateProfile} from "firebase/auth";
import userAuthentication from "../Login/Firebase/firebase.init";

userAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [isLoading,setIsLoading]=useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {        
                // saveUser(email,name,'POST');
                // const user = userCredential.user;
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    setError(error.message);
                });

                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
                // ..
            }).finally(() => {
                setIsLoading(false)
            });
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state.from || '/home';
                history.replace(destination);             
                // const user = userCredential.user;
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth]);
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.removeItem("state");
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => {
                setIsLoading(false)
            });
    }
    return{
        user,error,isLoading,logout,googleSignIn,loginUser,registerUser
    }
}
export default useFirebase;
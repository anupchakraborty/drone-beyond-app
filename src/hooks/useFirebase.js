import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';

// Initialize Firebase
initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //register user function
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setAuthError(''); 
            const newUser = { email, displayName: name };
            setUser(newUser);
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');  
        })
        .catch((error) => {
            setAuthError(error.message);        
        })
        .finally(() => setIsLoading(false));
    }

    //Google Provider function location history
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setAuthError('');
            const user = result.user;
            setUser(user);
            const destination = location?.state?.from || '/';
            history.replace(destination); 
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    //signin user function
    const loginUser =(email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError(''); 
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    //overserver state change function
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    //signout user function
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }

    return {
        user,
        registerUser,
        loginUser,
        logOut,
        isLoading,
        authError,
        signInUsingGoogle
    }
};

export default useFirebase;
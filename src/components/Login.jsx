import React from 'react'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../Firebase/firesbase.config';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  console.log("login");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
    const handleLogin = () =>{
        
        signInWithPopup(auth, googleProvider).then((result) => {
            
            const user = result.user;
            console.log(user);
            navigate('/');
          }).catch((error) => {
    
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <button className='bg-blue px-8 py-2 text-center text-white' onClick={handleLogin}>SignIn with Google</button>
    </div>
  )
}

export default Login 
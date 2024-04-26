import React, { useState } from 'react'; // Import useState for handling form state
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase/firesbase.config'; // Assuming correct import path
import { useNavigate } from 'react-router-dom';

const Signup = () => { // Corrected component name to Signup
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up successfully:', user);

      // Redirect to homepage or other appropriate route after successful signup
      navigate('/');  // You might want to redirect to a different page for new users
    } catch (error) {
      const errorMessage = error.message;
      console.error('Signup error:', errorMessage);
      // Handle errors appropriately (e.g., display user-friendly messages)
    }
  };

  const handleGoogleLogin = async () => { // Function for Google Sign-In
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);

      // Redirect to homepage after successful login
      navigate('/');
    } catch (error) {
      const errorMessage = error.message;
      const email = error.customData?.email; // Optional chaining for error.customData
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error('Login error:', errorMessage, email, credential);
      // Handle errors appropriately (e.g., display user-friendly messages)
    }
  };

  return (
    <div className='h-screen w-full flex items-center left-30 px-20'>
      <div className='absolute py-12 top-1 left-30'>
      <svg 
                xmlns="https://w3.org/2000/svg"
                width="200"
                height="250"
                viewBox="0 0 29 30"
                fill="none"             
                >
      <circle cx="12.0143" cy="12.5143"r="12.0143" fill="#cddbfa" fillOpacity="2" />
      <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#f0f4ff" />
      </svg>
      {/* <span>Job Nexus</span> */}
      </div>
      <br/>
      <div className='top-5 left-5' > {/* Left panel container */}
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='mb-2 py-2 px-5 border rounded bg-white text-black'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='py-2 px-5 border rounded bg-white text-black'
          />
          <br/>
          <br/>
          <button type="submit" className='bg-blue px-8 py-2 text-center text-white'>
            Sign Up
          </button>
        </form>
        <br /> {/* Add some space */}
        <button className='bg-blue px-8 py-2 text-center text-white' onClick={handleGoogleLogin}>
          Sign In with Google
        </button>
      </div>
      <div className='flex justify-end'> {/* Right panel container */}
        <img src="https://i.postimg.cc/kM20g9Ck/NA-October-10.jpg" alt="Your image description" /> {/* Import and display image */}
      </div>
    </div>
  );
};

export default Signup;

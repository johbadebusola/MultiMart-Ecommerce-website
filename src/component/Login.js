import React, {useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [loading,setLoading] = useState(false)
const navigate = useNavigate()

  const login = () => {
    setLoading(true)
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem("currentUser",JSON.stringify(user))
    setLoading(false)
    toast.success("Logged in successful")
    setTimeout(function () { navigate("/") }, 3000);
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    setLoading(false)
    console.log(errorCode);
    if (errorCode === "auth/weak-password") {
          
      toast.error("Password is too short")

    }
    if (errorCode === "auth/wrong-password") {

      toast.error("Wrong Password")
    }
    if (errorCode === "auth/network-request-failed") {

      toast.error("No internet")
    }
    if (errorCode === "auth/user-not-found") {
      toast.error("Create a new account")
    }

    if (errorCode === "auth/internal-error") {
      toast.error("retry")
    }
    if (errorCode === "auth/admin-restricted-operation") {
      toast.error("complete the fields below")
    }
    if (errorCode === "auth/missing-password") {
      toast.error("Input password")
    }
    
  });
  }
  return (
    <>
     <Toaster
        position="top-right"
        reverseOrder={false}
        className=""
        toastOptions={{
          // Define default options
          className: '',
          duration: 2000,
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}

      />

     <div className='signin-box'>
     <div>
      <h3> LogIn</h3>
     </div>
 <input type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
     <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}    />
     <motion.button
            onClick={login}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
         {loading ? "Signing in..." : "Signin"} 
          </motion.button>
    </div>
    </>
   
  )
}

export default Login
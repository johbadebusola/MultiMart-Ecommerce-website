import React, { useState } from "react";
import "../css/Signup.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";

const Signup = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const fullName = firstname + " " + lastname;

  const navigate = useNavigate();
  const signup = () => {
    setLoading(true);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoading(false);
        console.log(user);

        updateProfile(auth.currentUser, {
          displayName: fullName,
        });

        toast.success("Account created");
        setTimeout(function () {
          navigate("/login");
        }, 3000);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;

        setLoading(false);
        console.log(errorCode);
        if (errorCode === "auth/weak-password") {
          toast.error("Password is too short");
        }
        if (errorCode === "auth/email-already-in-use") {
          toast.error("Email already exist");
        }
        if (errorCode === "auth/network-request-failed") {
          toast.error("No internet");
        }
        if (errorCode === "auth/invalid-email") {
          toast.error("Invalid email");
        }

        if (errorCode === "auth/internal-error") {
          toast.error("retry");
        }
        if (errorCode === "auth/admin-restricted-operation") {
          toast.error("complete the fields below");
        }
        if (errorCode === "auth/missing-password") {
          toast.error("Input password");
        }
      });
  };

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        className=""
        toastOptions={{
          // Define default options
          className: "",
          duration: 2000,
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />

      <div className="signin-box">
        <div>
          <h3> Create An Account</h3>
        </div>

        <input
          type="text"
          placeholder="Firstname"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lastname"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <motion.button
          onClick={signup}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </motion.button>
      </div>
    </>
  );
};

export default Signup;

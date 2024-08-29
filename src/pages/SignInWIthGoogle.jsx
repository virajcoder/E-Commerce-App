import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../components/firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInwithGoogle() {
  // Function to handle Google Login
  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // If the user is authenticated, store their data in Firestore
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });

        toast.success("User logged in Successfully", {
          position: "top-center",
        });

        // Redirect to profile page
        window.location.href = "/profile";
      }
    } catch (error) {
      // Check if the error code matches the popup closed error
      if (error.code === "auth/popup-closed-by-user") {
        toast.info("Popup closed before signing in. Please try again.", {
          position: "top-center",
        });
      } else {
        // Handle other errors
        console.error("Error signing in:", error.message);
        toast.error(`Error: ${error.message}`, { position: "top-center" });
      }
    }
  };

  return (
    <div>
      <p
        style={{ display: "flex", justifyContent: "center"}}
        className="continue-p"
      >
        --Or continue with--
      </p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img
          src={require("../Images/google.png")}
          alt="Google Login"
          width={"60%"}
        />
      </div>
    </div>
  );
}

export default SignInwithGoogle;

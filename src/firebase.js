// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/database";
// import { getDatabase } from "firebase/database";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC82IE7BKa0jIMlBrryTR3iSb9BnWsXqcQ",
  authDomain: "fghnhhjk-90c2b.firebaseapp.com",
  projectId: "fghnhhjk-90c2b",
  storageBucket: "fghnhhjk-90c2b.appspot.com",
  messagingSenderId: "880568798575",
  appId: "1:880568798575:web:3b13221b4da9028708ac9a",
  measurementId: "G-VK7GGX05P5",
//  databasedURL: "https://fghnhhjk-90c2b-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// const database = getDatabase(app);
export {
  auth,
  app,
  // database
}
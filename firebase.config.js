import { getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG_kstkbk0BWvgUPZnpYIUr748WjigICs",
  authDomain: "dragon-news-layout-c5813.firebaseapp.com",
  projectId: "dragon-news-layout-c5813",
  storageBucket: "dragon-news-layout-c5813.firebasestorage.app",
  messagingSenderId: "356414517379",
  appId: "1:356414517379:web:bb98c365c2c5f8110d2bb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
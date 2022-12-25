import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDfSuWd5WhxPAs1SONWhekzBsBXiaVtXVA",
    authDomain: "crwn-clothing-db-61eec.firebaseapp.com",
    projectId: "crwn-clothing-db-61eec",
    storageBucket: "crwn-clothing-db-61eec.appspot.com",
    messagingSenderId: "249324018099",
    appId: "1:249324018099:web:229eae4960de57eb3553c6"
};
  
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    propmt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
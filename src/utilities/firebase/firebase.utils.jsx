import { initializeApp } from "firebase/app";

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

import { 
    getAuth,
    signInWithPopup,
    signInWithRedirect, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";



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
export const db = getFirestore();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {

    if (!userAuth) {
        return;
    }

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo });
        } catch(error) {
            console.log("ERROR: Creating user - ", error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        return;
    }

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        return;
    }

    return signInWithEmailAndPassword(auth, email, password);
};
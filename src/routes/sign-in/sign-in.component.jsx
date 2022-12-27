import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from "../../utilities/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.components";

const SignIn = () => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            } else {
                console.log("User not signed-in");
            }
        }

        fetchData();
    }, []);

    const loginGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={loginGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;
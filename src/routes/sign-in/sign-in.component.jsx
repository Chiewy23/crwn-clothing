import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utils";

const SignIn = () => {
    const loginGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={loginGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export default SignIn;
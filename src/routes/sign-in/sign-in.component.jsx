import { signInWithGooglePopup } from "../../utilities/firebase/firebase.utils";

const SignIn = () => {
    const loginGoogleUser = async () => {
        const response = await signInWithGooglePopup();

    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={loginGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export default SignIn;
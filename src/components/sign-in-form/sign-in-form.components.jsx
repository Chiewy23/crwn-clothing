import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utilities/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
    email: "",
    password: ""
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();

        } catch(error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("Incorrect password or email");
                    break;
                case "auth/user-not-found":
                    alert("Incorrect password or email");
                    break;
                default:
                    alert(`Error occured when signing in - ${error}`);
                    break;
            }

            return;
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email & password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;
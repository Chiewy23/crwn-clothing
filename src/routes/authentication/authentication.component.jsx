import { createUserDocumentFromAuth, auth } from "../../utilities/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../components/sign-in-form/sign-in-form.components";

const Authentication = () => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                return await createUserDocumentFromAuth(response.user);
            } else {
                console.log("User not signed-in");
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Sign In</h1>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;
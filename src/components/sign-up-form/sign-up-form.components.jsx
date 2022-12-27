const SignUpForm = () => {
    return (
        <div>
            <h1>Sign Up With Your Email & Password</h1>
            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input type="text" required/>

                <label>Email</label>
                <input type="email" required/>

                <label>Password</label>
                <input type="password" required/>

                <label>Password</label>
                <input type="password" required/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUpForm;
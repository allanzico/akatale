import React, { useState } from 'react';
import '../Login/Login.css';
import logo from '../../images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = e => {
        e.preventDefault();

        //Firebase Login
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/');
        }).catch(error => alert(error.message));
    }

    const signUp = e => {
        e.preventDefault();

        //Firebase register
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                history.push('/');
            }
        }).catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src={logo} alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>
                        E-mail
                    </h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>
                        Password
                    </h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    Don't have an account? Create new account by filling in the form above and clicking the button below
                </p>
                <button type="submit" className="login__signUpButton" onClick={signUp}>Create New Account</button>
            </div>
        </div>
    )
}

export default Login

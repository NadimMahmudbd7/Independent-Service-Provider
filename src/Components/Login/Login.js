import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import "../styles/Login.css"
import auth from '../../firebase.init';

const Login = () => {
    const [user, loading, userError] = useAuthState(auth)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [userInfo, setUserInfo] = useState({ email: '', password: '' })
    const [error, setError] = useState({ email: '', password: '' })
    const handleEmail = (event) => {
        event.preventDefault()
        const formail = event.target.email.value
        console.log(formail);
    }


    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form onSubmit={handleEmail} className="login-form">
                <input type="email" name='email' onBlur={(event) => handleEmail(event.target.value)} placeholder="Your Email" />
                <input type="password" name='password' placeholder="password" onChange={handleEmail} />
                <button>Login</button>
                <p>Don't have an account? <Link to="/signup">Sign up first</Link> </p>
            </form>

            <button>Google</button>
        </div>
    );
};

export default Login;
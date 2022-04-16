import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "../styles/Login.css"
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        HookError,
      ] = useSignInWithEmailAndPassword(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [userInfo, setUserInfo] = useState({ email: '', password: '' })
    const [error, setError] = useState({ email: '', password: '' })
    const handleEmail = (event) => {
        event.preventDefault()
        const Email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(Email,password)
    }
    if (loading) {
          <p>Loading</p>
      }
    if(user){
        navigate(from)
    }


    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form onSubmit={handleEmail} className="login-form">
                <input type="email" name='email'  placeholder="Your Email" />
                <input type="password" name='password' placeholder="password" />
                <button>Login</button>
                <p>Don't have an account? <Link to="/signup">Sign up first</Link> </p>
            </form>

            <button>Google</button>
        </div>
    );
};

export default Login;
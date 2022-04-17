import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import "./Login.css"
import "../styles/Login.css"
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import google from '../images/google.png'

const Login = () => {
    const [activeUser] = useAuthState(auth)
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        HookError,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [userInfo, setUserInfo] = useState({ email: '', password: '' })
    const [error, setError] = useState({ email: '', password: '' })

    const forEmail = (event) => {
        const invalidEmail = event.target.value;
        if (/\S+@\S+\.\S+/.test(invalidEmail)) {
            setUserInfo({ ...userInfo, email: invalidEmail })
            setError({ ...error, email: '' })
        } else {
            setError({ ...error, email: "This email is not valid" })
            setUserInfo({ ...userInfo, email: '' })
            return
        }
    }
    const forPassword = (event) => {
        if (/.{7,}/.test(event.target.value)) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setError({ ...error, password: '' })
        }
        else {
            setError({ ...error, password: "Minimum 7 characters" })
            setUserInfo({ ...userInfo, password: '' })
            return
        }
    }

    const handleEmail = (event) => {
        event.preventDefault()
        const Email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(Email, password)
    }
    const forResetPassword = async () => {
        await sendPasswordResetEmail(userInfo.email);
        toast("Password Reset successfull")
    }
    if (loading) {
        <p>Loading</p>
    }
    if (user || googleUser) {
        navigate(from)
    }

    useEffect(() => {
        if (HookError) {
            switch (HookError?.code) {
                case "auth/invalid-password":
                    toast("wrong pass")
                    break;
                case "auth/invalid-email":
                    toast("email nai")
                    break;
                default:
                    toast("someting went wrong")
            }
        }
    }, [HookError])

    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form onSubmit={handleEmail} className="login-form">
                <input type="email" name='email' placeholder="Your Email" onChange={forEmail} />
                {error.email && <p className='error-message'>{error.email}</p>}
                <input type="password" name='password' placeholder="password" onChange={forPassword} />
                {error.password && <p className='error-message'>{error.password}</p>}
                <a className='forgotPass' onClick={forResetPassword}>Forgot Password</a>
                <button>Login</button>
                <p>Don't have an account? <Link to="/signup">Sign up first</Link> </p>
            </form>
            <div className="or">
                <div className="right"></div>
                <div className="middle">or</div>
                <div className="left"></div>
            </div>
            <button onClick={() => signInWithGoogle()}>
                <div className="googleSection">
                <div className="image">
                    <img className='google' src={google} alt="" />
                </div>
                <div className="title">
                    Google
                </div>
                </div>
            </button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
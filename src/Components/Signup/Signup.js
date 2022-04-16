import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [userInfo,setUserInfo] = useState({email:'',password:'',confirmpass:''})
    const [error,setError] = useState({email:'',password:''})
    const handleEmail = (event)=>{
       event.preventDefault()
        const formail = event.target.email.value
        const password = event.target.password.value
        const confirmPass = event.target.confirmPassword.value
        console.log(formail,password,confirmPass);
    }
    return (
        <div className="login-container">
        <div className="login-title">SIGNUP</div>
        <form onSubmit={handleEmail} className="login-form">
            <input type="email" name='email' placeholder="Your Email" />
            <input type="password" name='password' placeholder="password" onChange={handleEmail} />
            <input type="password" name='confirmPassword' placeholder="confirmPassword" />
            <button>SignUp</button>
            <p>Already Have Account? <Link to="/login">Login</Link> </p>
        </form>

        <button>Google</button>
    </div>
    );
};

export default Signup;
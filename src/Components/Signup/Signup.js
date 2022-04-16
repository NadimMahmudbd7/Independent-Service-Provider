import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import auth from '../../firebase.init';


const Signup = () => {
    const navigate = useNavigate()
    const [userInfo,setUserInfo] = useState({email:'',password:'',confirmpass:''})
    const [error,setError] = useState({email:'',password:''})
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        HookError,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const forEmail = (event) => {
        const invalidEmail = event.target.value;
        if (/\S+@\S+\.\S+/.test(invalidEmail)) {
            setUserInfo({ ...userInfo, email: invalidEmail })
            setError({ ...error, email: '' })
            console.log(userInfo);
        } else {
            setError({ ...error, email: "This email is not valid" })
            setUserInfo({ ...userInfo, email: '' })
            console.log(error);
            return
        }
    }
    const handleEmail = async (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPass = event.target.confirmPassword.value
        console.log(email, password, confirmPass);
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: userInfo.name });
        toast('Account Successfully Created');
        
    }
    
    return (
        <div className="login-container">
        <div className="login-title">SIGNUP</div>
        <form onSubmit={handleEmail} className="login-form">
            <input type="email" name='email' placeholder="Your Email" onChange={forEmail}/>
            {error.email && <p className='error-message'>{error.email}</p>}
            <input type="password" name='password' placeholder="password"  />
            <input type="password" name='confirmPassword' placeholder="confirmPassword" />
            <button>SignUp</button>
            <p>Already Have Account? <Link to="/login">Login</Link> </p>
        </form>

        <button>Google</button>
        <ToastContainer></ToastContainer>
    </div>
    );
};

export default Signup;
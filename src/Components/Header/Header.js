import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomeLink/CustomLink';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };
    return (
        <>
            <nav className="navbar-expand-lg navbar navbar-dark bg-primary sticky-lg-top sticky-sm-top">
                <div className="container-fluid container">
                    <a className="navbar-brand" href="#"> <span>Chapai</span> MatchMaking</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-start" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <CustomLink className="nav-link active" aria-current="page" to="/">Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link active" to={'/blog'}>Blog</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link active" to={"/aboutme"}>About Me</CustomLink>
                            </li>
                            <li className="nav-item">
                                { user ?<CustomLink className="nav-link active" onClick={logout} to={"/login"}>Sign Out</CustomLink> :<CustomLink className="nav-link active" to={"/login"}>Login</CustomLink>}
                            </li>
                            <li className="nav-item">
                                {user?<CustomLink className="nav-link active d-none" to={"/signup"}>Sign Up</CustomLink> : <CustomLink className="nav-link d-block active" to={"/signup"}>Sign Up</CustomLink>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
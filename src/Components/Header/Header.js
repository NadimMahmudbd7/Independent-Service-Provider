import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase.init';

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
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/blog'}>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/aboutme"}>About Me</Link>
                            </li>
                            <li className="nav-item">
                                { user ?<Link className="nav-link" onClick={logout} to={"/login"}>Sign Out</Link> :<Link className="nav-link" to={"/login"}>Login</Link>}
                            </li>
                            <li className="nav-item">
                                {user?<Link className="nav-link d-none" to={"/signup"}>Sign Up</Link> : <Link className="nav-link d-block" to={"/signup"}>Sign Up</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
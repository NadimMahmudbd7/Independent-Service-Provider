import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div>
            <div className="questionAndAnswer backGroundSection">
                <h2 className="text-center text-4xl my-10 animate__animated wow animate__fadeInDown title">Question And Answer</h2>
                <div className="grid grid-cols-2 gap-20 mx-10 questonsAndAnswer container">
                    <div className="bg-white p-10 allquestion animate__animated wow animate__fadeInLeft">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-3 text-xl">Q1: Authentication VS Authorization</h5>
                                <div className="compare">
                                <div className="authentication">
                                    <h6>Authentication</h6>
                                    <p>Authentication verifies who the user is.</p>
                                    <p>At first verify Authentication Who are you.</p>
                                    <p>	It needs usually user’s login details.</p>
                                </div>
                                <div className="authorization">
                                   <h6>Authorization</h6>
                                    <p>Authorization determines what resources a user can access.</p>
                                    <p>Authorization check what permission do you have.</p>
                                    <p>While it needs user’s privilege or security levels.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-10 allquestion animate__animated wow animate__fadeInRight">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-3 text-xl">Q2: Why Use Firebase for alternative and Firebase alternative for Authentication</h5>
                                <p className="card-text">
                                    <h6>Why Use Firebase Authentication</h6>
                                Firebase Authentication is fully secure for authentication systems easy. while improving the sign-in experience for end users.  It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.
                                 </p>
                                 <h6>Firebase alternative for Authentication</h6>
                                 <li>Auth0</li> 
                                 <li>Okta</li>
                                 <li>Keycloak</li>
                                 and more
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-10 allquestion animate__animated wow animate__slideInUp">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-3 text-xl">Q3: what is Semantic tag</h5>
                                <p className="card-text">
                                    This is most important think to use Semantic Tag. it makes webpages more informative and helps to search engines for better performance. and professional developer habbit is used semantic tag. For example using div you can use better layout experience. you can use like Section , Header, Nav, Main, Footer etc are Semantic Elements. 
                                 </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;
import React from 'react';
import "./AboutMe.css"
import image from "../images/abuotme.jpg"

const AboutMe = () => {
    return (
        <div>
            <div className="backGroundSection">
                <div className="aboutme container">
                    <div className='aboutImage animate__animated wow animate__zoomIn'>
                        <img className="imageForMe" src={image} alt="" />
                    </div>
                    <div className="detailsMe animate__animated wow animate__slideInRight">
                    <div className="alldetails">
                    <h1>Nadim Mahmud</h1>
                    <small className='small'>Junior WebDeveloper</small>
                    <p>I'm Nadim Mahmud. I have only one dream. I want to be a professionl WebDeveloper.
                       Already I'm hard working for this. My target 2 months for prepare atlist junioir WebDeveloper. I'm waiting for my acheivement. </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
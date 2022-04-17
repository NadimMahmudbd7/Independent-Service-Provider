import React, { useEffect, useState } from 'react';
import banner from "../images/banner.png";
import love from "../images/w-title-b.png";
import wicon1 from "../images/w-icon-1.png";
import wicon2 from "../images/w-icon-2.png";
import wicon3 from "../images/w-icon-3.png";
import wicon4 from "../images/w-icon-4.png"
import souel1 from "../images/soul-1.png"
import souel2 from "../images/soul-2.png"
import souel3 from "../images/soul-3.png"
import Service from '../Service/Service';
import "./Carosel.css"


const Carosel = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {/* Carosel section */}
            <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Meet with confidence.</h2>
                            <p>Events are back!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Welcome section */}
            <div className="welcome d-flex align-items-center justify-content-center flex-column my-5">
                <h2 className='text-center mt-5'>Welcome to <span>Chapai</span> MatchMaking</h2>
                <img src={love} alt="" />
            </div>
            <div className="CustomerStatus row">
                <div className="onePerson col-3 d-flex align-items-center justify-content-center flex-column">
                    <img src={wicon1} alt="" />
                    <h1>1611</h1>
                    <small>Total Members</small>
                </div>
                <div className="onePerson col-3 d-flex align-items-center justify-content-center flex-column">
                    <img src={wicon2} alt="" />
                    <h1>500</h1>
                    <small>Members online</small>
                </div>
                <div className="onePerson col-3 d-flex align-items-center justify-content-center flex-column">
                    <img src={wicon3} alt="" />
                    <h1>300</h1>
                    <small>Men online</small>
                </div>
                <div className="onePerson col-3 d-flex align-items-center justify-content-center flex-column">
                    <img src={wicon4} alt="" />
                    <h1>200</h1>
                    <small>Women online</small>
                </div>
            </div>
            {/* welcome section end */}

            
            <div className="ServiceSection">
                <h1 className='text-center my-5'>My Services</h1>

                <div className="allServices pb-5">
                    {
                        services.map(oneService => <Service oneService={oneService} key={oneService.id}></Service>)
                    }
                </div>
            </div>

            <div className="SoulMate container">
            <div className="welcome d-flex align-items-center justify-content-center flex-column my-5">
                <h2 className='text-center mt-5'>Step to Find Your Soul mate</h2>
                <img src={love} alt="" />
            </div>
            <div className="Customer Status row">
                <div className="onePerson col-4 d-flex align-items-center justify-content-center flex-column">
                    <img src={souel1} alt="" />
                    <h1>Create a profile</h1>
                </div>
                <div className="onePerson col-4 d-flex align-items-center justify-content-center flex-column">
                    <img src={souel2} alt="" />
                    <h1>Find matches</h1>
                </div>
                <div className="onePerson col-4 d-flex align-items-center justify-content-center flex-column">
                    <img src={souel3} alt="" />
                    <h1>Start Dating</h1>
                </div>
            </div>
            </div>

            {/* FooterSection */}
            <footer className="footer-details">
                <div className="footer-title">
                    <h2><span className='chapai'>Chapai</span> MatchMakings</h2>
                    <p>Copyright &copy; 2020  Chapai products</p>
                    <p>All rights reserved</p>
                </div>
                <div className="footer-icon">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>

                </div>
            </footer>
        </div>
    );
};

export default Carosel;
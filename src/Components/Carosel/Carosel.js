import React from 'react';
import banner from "../images/banner.png";
import love from "../images/w-title-b.png";
import wicon1 from "../images/w-icon-1.png";
import wicon2 from "../images/w-icon-2.png";
import wicon3 from "../images/w-icon-3.png";
import wicon4 from "../images/w-icon-4.png"

const Carosel = () => {
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
            {/* Welsome section */}
            <div className="welcome d-flex align-items-center justify-content-center flex-column my-5">
                <h2 className='text-center mt-5'>Welcome to <span>Chapai</span> MatchMaking</h2>
                <img src={love} alt="" />
            </div>
            <div className="Customer Status row">
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
        </div>
    );
};

export default Carosel;
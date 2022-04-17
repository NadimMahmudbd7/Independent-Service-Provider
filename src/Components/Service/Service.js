import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"


const Service = ({ oneService }) => {
    const { id, name, price, description, img } = oneService
    return (
        <div>
            <div className="services container animate__animated wow animate__slideInUp">
                <img className='image' src={img} alt="" />
                <div className="details">
                    <h1>{name}</h1>
                    <small>{description}</small>
                    <h3>Price: ${price}</h3>
                    <Link to={"/checkout"}>
                    <button className='btn btn-primary'> CheckOut Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import "./Checkout.css"

const Checkout = () => {

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <form action="" className='Register' >
                <h1 className='signUp'>Add Your Check Out Information</h1>
                <input className='inputField' type="text" name="" id="" placeholder='Name' required />
                <input readOnly className='inputField' name="" id="" placeholder="Email" required />
                <input className='inputField' type="text" name="" placeholder='Address' id="" required />
                <input className='inputField' type="text" name="" id="" placeholder='Phone' required />
                <input className='inputField submit' type="submit" value="Confirm Order" />
            </form>
        </div>
    );
};

export default Checkout;
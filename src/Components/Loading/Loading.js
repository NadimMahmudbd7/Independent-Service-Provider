import React from 'react';

const Loading = () => {
    return (
        <div className="spinner d-flex justify-content-center align-items-center" style={{height:"500px"}}>
            <div className="spinner-border text-primary " role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>
    );
};

export default Loading;
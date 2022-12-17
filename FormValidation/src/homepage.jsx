import React from 'react';
import MainHeader from './mainheader';

const HomePage = () => {
    return (
        <>
            <MainHeader/>
            <div className="container">
                <div className="row">
                    <div className="col mt-5">
                        <h1 className='text-center'>Welcome to our Website.</h1>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default HomePage;
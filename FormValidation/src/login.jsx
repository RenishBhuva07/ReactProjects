import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from 'mdb-react-ui-kit';
import ValidationHook from './hooks/validationHooks';
import MainHeader from './mainheader';

const Login = () => {

    const {inputs, handleInputChange, checkValid, errors} = ValidationHook({},{});

    let clickHandle = () =>{
        console.log("called");
        console.log(inputs);
    }

    return (
        <>
            <MainHeader/>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-4 offset-md-4">
                        <MDBCard border='primary'>
                            <MDBCardHeader border='primary' className='text-center'>Sign Up</MDBCardHeader>
                            <MDBCardBody>
                                <div className="row mt-3">
                                    <div className="col">
                                        <MDBInput label='Email' onBlur={checkValid} onChange={handleInputChange} value={inputs.email} id='email' type='email' name='email' />
                                        {errors.emailError}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <MDBInput label='password' onBlur={checkValid} onChange={handleInputChange} value={inputs.password} name="password" id='password' type='password' />
                                        {errors.passwordError}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <MDBBtn onClick={clickHandle}>Login</MDBBtn>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Login;
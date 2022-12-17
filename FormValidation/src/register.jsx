import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from 'mdb-react-ui-kit';
// import { useNavigate } from 'react-router-dom';
import ValidationHook from './hooks/validationHooks';
import MainHeader from './mainheader';
const Register = () => {
    // let navigate = useNavigate();

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
                            <MDBCardHeader border='primary' className='text-center'>Registration</MDBCardHeader>
                            <MDBCardBody>
                                <div className="row mt-3">
                                    <div className="col">
                                        <MDBInput label='First Name' onBlur={checkValid} onChange={handleInputChange} value={inputs.firstname} name="firstname" id='firstname' type='text' />
                                        {errors.firstnameError}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <MDBInput label='Last Name' onBlur={checkValid} onChange={handleInputChange} value={inputs.lastname} name="lastname" id='lastname' type='text' />
                                        {errors.lastnameError}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <MDBInput label='Email'  onBlur={checkValid} onChange={handleInputChange} value={inputs.email} name="email" id="email" type="email" />
                                        {errors.emailError}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <MDBInput label='password'  onBlur={checkValid} onChange={handleInputChange} value={inputs.password} name="password" id='password' type='password' />
                                        {errors.passwordError}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <MDBBtn onClick={clickHandle}>Register</MDBBtn> &nbsp;
                                        <MDBBtn className='btn-danger'>Cancel</MDBBtn>
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

export default Register;
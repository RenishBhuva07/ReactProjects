import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from 'mdb-react-ui-kit';
// import { useNavigate } from 'react-router-dom';
import MainHeader from './mainheader';
// import axios from 'axios';


const SignUp = () => {


    // let navigate = useNavigate();

    const [inputs, setInputs] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        firstnameError: '',
        lastnameError: '',
        emailError: '',
        passwordError: ''
    })

    const handleInputChange = (e) => {
        e.persist();
        if (e.target.type == "text") {
            var Pattern = /^([A-Za-z])+$/;
            if (Pattern.test(e.target.value)) {
                setErrors({ ...errors, [e.target.name + "Error"]: "" });
            }
            else {
                setErrors({ ...errors, [e.target.name + "Error"]: "Invalid name formate" });
            }
        }
        else if (e.target.type == "email") {
            var Pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\.\-])+\.)+([a-zA-Z]{2,4})$/;
            if (Pattern.test(e.target.value)) {
                setErrors({ ...errors, "emailError": "" });
            }
            else {
                setErrors({ ...errors, "emailError": "Invalid email formate" });
            }
        }
        else if (e.target.type == "password") {
            if (e.target.value.length < 8) {
                setErrors({ ...errors, [e.target.name + "Error"]: "password should be minimum 8 characters" });
            }
            else {
                setErrors({ ...errors, [e.target.name + "Error"]: "" });
            }
        }
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const checkValid = (e) => {
        e.persist();
        if (e.target.type == "text" || e.target.type == "password" || e.target.type == "email") {
            if (e.target.value == "") {
                setErrors({ ...errors, [e.target.name + "Error"]: "this field is required" });
            }
            else {
                setErrors({ ...errors, [e.target.name + "Error"]: "" });
            }
        }
        else {
            setInputs({ ...inputs, [e.target.name]: e.target.value });
        }
    }

    let clickHandle = (e) => {
        e.preventDefault();
        console.log(inputs);

        // const requestOptions = {
        //     method: 'POST',
        //     headers: {'Content-Type':'application/json'},
        //     body: JSON.stringify(inputs)
        // };

        // fetch(``,requestOptions).then((res) => res.json())
        // .then((returndata) => {
        //     console.log(returndata);
        //     if(returndata.Code == 1){
        //         navigate(`/login`);
        //     }else{
        //         alert("Error while registration try after sometime..!");
        //     }
        // })

        // axios.post(``,{inputs}).then((res)=>{
        //     console.log(res);
        //     if(res.data.Code == 1){
        //         navigate(`/login`);
        //     }else{
        //         console.log("Try again in few minutes..!");
        //     }
        // })
    }

    return (
        <>
            <MainHeader />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-4 offset-md-4">
                        <MDBCard border='primary'>
                            <MDBCardHeader border='primary' className='text-center'>Sign Up</MDBCardHeader>
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
                                        <MDBInput label='Email' onBlur={checkValid} onChange={handleInputChange} value={inputs.email} name="email" id="email" type="email" />
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
                                        <MDBBtn onClick={clickHandle}>Sign Up</MDBBtn> &nbsp;
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

export default SignUp;
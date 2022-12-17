import React, { useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from 'mdb-react-ui-kit';
import MainHeader from './mainheader.jsx';
import axios from 'axios';

export default function Register() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,[e.target.name]: value
    });
  };

  const submithandler = () => {
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    }
    axios.post(`https://reqres.in/api/users`, { userData })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <MainHeader />
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 mt-5">
            <div className="card">
              <div className="card-header">
                <h3 className='text-center'>Register Form</h3>
              </div>
              <div className="card-body">
                <form onSubmit={submithandler}>
                  <MDBRow className='mb-4'>
                    <MDBCol>
                      <MDBInput id='form3Example1' label='First name' name='firstName' value={data.firstName} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput id='form3Example2' label='Last name' name='lastName' value={data.lastName} onChange={handleChange} />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput className='mb-4' type='text' id='form3Example3' label='Email address' name='email' value={data.email} onChange={handleChange} />
                  <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' name='password' value={data.password} onChange={handleChange} />

                  <MDBBtn type='submit' className='mb-4' block>
                    Sign in
                  </MDBBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
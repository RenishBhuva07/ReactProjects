import { MDBCollapse, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarNav, MDBNavbarToggler } from 'mdb-react-ui-kit';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    const [showBasic, setShowBasic] = useState(false);
    return (
        <>
            <MDBNavbar expand='lg' dark bgColor='dark'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>User App</MDBNavbarBrand>

                    <MDBNavbarToggler aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' onClick={()=> setShowBasic(!showBasic)}>
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>                            
                            <MDBNavbarItem>
                                <Link to='/' className='nav-link active'>Home</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to='/registration' className='nav-link'>Register</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to='/login' className='nav-link'>Login</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to='/signup' className='nav-link'>Sign Up</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to='/signin' className='nav-link'>Sign In</Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default MainHeader;
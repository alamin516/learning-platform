import React, { useContext, useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import { ThemeContext } from '../../../App';
import ReactSwitch from 'react-switch';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const { theme, setTheme } = useContext(ThemeContext);


    const handleToggle = () => {
        setTheme((curr) => curr === "light" ? "dark" : "light")
    }



    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(error => console.error(error))
    }
    return (
        <Navbar sticky="top" className='shadow App' collapseOnSelect expand="lg" bg={theme} variant="light">
            <Container className='nav-link'>
                <Navbar.Brand><Link className='text-decoration-none text-dark' to='/'>Tech Learning Mate</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto gap-2 text-center">
                        <Link className='text-decoration-none text-dark px-2' to='/'>HOME</Link>
                        <Link className='text-decoration-none text-dark px-2' to='/courses'>COURSES</Link>
                        <Link className='text-decoration-none text-dark px-2' to='/faq'>FAQ</Link>
                        <Link className='text-decoration-none text-dark px-2' to='/blog'>BLOGS</Link>
                        <span>☀️</span>
                        <ReactSwitch onChange={handleToggle} checked={theme === "dark"} />
                        <span>🌒</span>

                    </Nav>
                    <Nav className='d-lg-flex align-items-center'>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <Nav.Link className='me-2'>{user?.displayName}</Nav.Link>
                                        <Button onClick={handleLogOut} variant="light" className='me-lg-2'>LogOut</Button>
                                    </> :
                                    <>
                                        <Nav className='d-lg-inline px-2'><Link to='/register'>Register</Link></Nav>
                                        <Nav className='d-lg-inline px-2'><Link to='/login'>Log In </Link></Nav>
                                    </>
                            }

                        </>
                        <Link to="/profile">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user.photoURL}
                                ></Image> :
                                <>{user?.uid && <FaUser></FaUser>}</>
                            }
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
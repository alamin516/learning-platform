import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()



    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(error => console.error(error))
    }
    return (
        <Navbar sticky="top" className='mb-4 shadow' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link className='text-decoration-none text-dark' to='/'>Tech Learning Mate</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto gap-2 text-center">
                        <Link className='text-decoration-none text-dark px-2' to='/courses'>Courses</Link>
                        <Link className='text-decoration-none text-dark px-2' to='/'>Faq</Link>
                        <Link className='text-decoration-none text-dark px-2' to='/blog'>Blog</Link>

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
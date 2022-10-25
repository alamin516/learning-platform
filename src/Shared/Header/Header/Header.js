import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const navigate = useNavigate()


    const handleLogOut = ()=>{
        logOut()
        .then(()=> {
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
                    <Nav className="me-auto">
                    <Link className='text-decoration-none text-dark' to='/login'>Tech Learning Mate</Link>
                    <Link className='text-decoration-none text-dark' to='/'>Tech Learning Mate</Link>
                    <Link className='text-decoration-none text-dark' to='/'>Tech Learning Mate</Link>
                        
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
                                <Nav.Link className='d-lg-inline'><Link  to='/register'>Register</Link></Nav.Link>
                                <Nav.Link className='d-lg-inline'><Link  to='/login'>Log In </Link></Nav.Link>
                                
                                
                                </>
                            }

                        </>
                        <Link  to="/profile">
                            {user?.photoURL ?
                        <Image
                        style={{height: '30px'}}
                        roundedCircle
                        src={user.photoURL}
                        ></Image> : 
                        <FaUser></FaUser>
                        }
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
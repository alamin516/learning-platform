import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle, } from 'react-icons/fa';
import { Col, Container } from 'react-bootstrap';


const Login = () => {
    const { logIn, setLoading, loginProvider } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const from = location.state?.from?.pathname || '/';


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                } else {
                    toast.error('Your email is not verified. Please verify your email.')
                }
            })
            .catch(e => {
                console.error(e)
                setError(e.message)

            })
            .finally(() => {
                setLoading(false)
            })
    }


    const handleGoogleSignIn = () => {
        loginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        loginProvider(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <Container fluid="md">
            <Col lg={3}>
            </Col>
            <Col lg={6} sm={12} className='mx-auto border-1 border-gray shadow-lg p-5 rounded mb-5 text-start'>
                <Form onSubmit={handleLogin}>
                    <h2 className='text-center'>Log In</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                    <Form.Group className="my-3">
                        Create a New account? <Link to='/register'>Register</Link>
                    </Form.Group>
                    <Form.Group className="mb-3 text-danger">
                        {error}
                    </Form.Group>
                    <Form.Group className="mb-3 text-danger">
                        <ButtonGroup className='w-100'>
                            <Button className='me-2' onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle /> Login with Google</Button>
                            <Button variant="outline-secondary" onClick={handleGithubSignIn}><FaGithub /> Login with Github</Button>
                        </ButtonGroup>
                    </Form.Group>
                </Form>
            </Col>
            <Col lg={3}>
            </Col>
        </Container>
    );
};

export default Login;
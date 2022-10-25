import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import {FaGithub, FaGoogle,} from 'react-icons/fa';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';


const Register = () => {
    const { createUser, updateUserProfile, emailVerification, loginProvider } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.url.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password)

        createUser(email, password)
            .then(() => {
                setError('')
                form.reset()
                handleUpdateUser(name, photoURL)
                handleEmailVerify()
                toast.success('Please check your email to verify')
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }

    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }

    const handleEmailVerify = () => {
        emailVerification()
            .then(() => { })
            .catch(e => console.error(e))
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
        <Form onSubmit={handleRegister} className='w-50 mx-auto border-1 border-gray shadow-lg p-5 rounded mb-5 text-start'>
            <h2 className='text-center'>Register</h2>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="url" name='url' placeholder="Enter photoURL" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox"
                    onClick={handleAccepted} label={<>
                        Accept <Link to='/terms'>Terms and condition</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Group className="my-3">
                Already, have an account? <Link to='/login'>Login</Link>
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
    );
};

export default Register;
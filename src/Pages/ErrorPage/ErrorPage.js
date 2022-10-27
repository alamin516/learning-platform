import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <Container className='text-center'>
            <Row>
                <h1>404</h1>
                <p>Opps! Page Not Found</p>
                <button className='btn btn-primary'>
                    <Link to='/'>Return Home</Link>
                </button>
            </Row>
        </Container>
    );
};

export default ErrorPage;
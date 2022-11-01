import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Home = () => {
  return (
    <div className='banner'>
      <Container>
        <Row>
          <Col lg={12} className='text-center'>
            <div className='banner-content text-light'>
              <h2>Tech Learning Mate</h2>
              <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices. </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
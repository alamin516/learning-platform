import React from 'react';
import { Button, Col, Container, Image, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../../assets/Carousel/slider1.png'
const Home = () => {
    return (
       <Container style={{background: `url${image}`}}>
        <Row className='text center py-5'>
          <Col lg={6} className='text center py-5'>
            <h2>Tech Learning Mate</h2>
          <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices. </p>
          </Col>
        </Row>
       </Container>
      );
};

export default Home;
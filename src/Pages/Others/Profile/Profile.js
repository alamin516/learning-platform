import React, { useContext } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import { FaUser } from 'react-icons/fa';


const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <Container className='my-3'>
            <Row>
                <Col lg={3}>

                </Col>
                <Col lg={6}>
                    <div className="text-center">
                        <h3 >{user?.displayName}'s profile</h3>
                        <div className="my-3">
                        {user?.photoURL ?
                            <Image
                                roundedCircle
                                src={user.photoURL}
                            ></Image> :
                            <>{user?.uid && <FaUser></FaUser>}</>
                        }
                        </div>
                        {
                            user?.email && <p>Email: {user?.email}</p>
                        }
                    </div>

                </Col>
                <Col lg={3}>

                </Col>
            </Row>

        </Container>
    );
};

export default Profile;
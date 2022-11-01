import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <Container fluid="md">
            <Col lg={12} className="mx-auto py-5">
                <h2>Terms And Condition page</h2>
                <p>Introduction</p>
                <p className="text-start">
                    1. These are the terms and conditions governing the use of https://alison.com, (the Website) and the agreement that operates between us and you (the Terms). The Website is owned and operated by Alison (us/our/we) and these Terms set out the rights and obligations of all users (you/your) in relation to your use of the Website. Please read carefully these Terms and our Privacy Statement. By using the Website you are consenting to be bound by the then current Terms and our Privacy Statement. We may revise the Terms and information contained on the Website at any time and without notice. If you do not agree to these Terms or the Privacy Statement, please refrain from using the Website.

                    2. If you have any questions about the Terms or the Privacy Statement, please contact us at Alison, Level One Building, Galway Technology Park, Parkmore, Galway, Ireland.
                </p>
                <h5>Create a new account <Link to='/register'>Register</Link></h5>
            </Col>
        </Container>
    )
}

export default TermsAndCondition;
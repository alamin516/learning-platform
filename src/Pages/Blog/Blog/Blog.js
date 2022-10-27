import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container fluid="md" className='py-4'>
            <Row>
                <h3 className='text-center mb-4'>Blog</h3>

                <div className='border-1 shadow-sm mb-4 p-2 rounded'>
                    <h2>what is cors?</h2>
                    <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

                        In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.

                        The client and server have a different origin from each other, i.e., accessing resources from a different server. In this case, trying to make a request to a resource on the other server will fail.

                        This is a security concern for the browser. CORS comes into play to disable this mechanism and allow access to these resources. CORS will add a response header access-control-allow-origins and specify which origins are permitted. CORS ensures that we are sending the right headers.

                        Therefore, a public server handling a public API will add a CORS related header to the response. The browser on the client machine will look at this header and decide whether it is safe to deliver that response to the client or not.</p>
                </div>
                <div className='border-1 shadow-sm mb-4 p-2 rounded'>
                    <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                        Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</p>
                </div>
            </Row>
        </Container>
    );
};

export default Blog;
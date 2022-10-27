import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container fluid="md" className='py-4'>
            <Row>
                <h3 className='text-center mb-4'>Blog</h3>

                <div className='border-1 shadow-lg mb-4 p-3 rounded'>
                    <h2>what is cors?</h2>
                    <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

                        In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.

                        The client and server have a different origin from each other, i.e., accessing resources from a different server. In this case, trying to make a request to a resource on the other server will fail.

                        This is a security concern for the browser. CORS comes into play to disable this mechanism and allow access to these resources. CORS will add a response header access-control-allow-origins and specify which origins are permitted. CORS ensures that we are sending the right headers.

                        Therefore, a public server handling a public API will add a CORS related header to the response. The browser on the client machine will look at this header and decide whether it is safe to deliver that response to the client or not.</p>
                </div>
                <div className='border-1 shadow-lg mb-4 p-3 rounded'>
                    <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                        Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</p>
                </div>
                <div className='border-1 shadow-lg mb-4 p-3 rounded'>
                    <h2>How does the private route work?</h2>
                    <p>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

                        The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.

                        In this article, we can see. How to create public and private routes using react-router for your react apps. </p>
                </div>
                <div className='border-1 shadow-lg mb-4 p-3 rounded'>
                    <h2>What is Node? How does Node work?</h2>
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                </div>
            </Row>
        </Container>
    );
};

export default Blog;
import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../../Course/Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);

    return (
        <Container fuild="lg">
            <Row>
            <Col lg={3}>
                <div>
                    {

                        courses.map(course => <Link key={course.id} className='text-decoration-none' to={`/course/${course.id}`}><ListGroup>
                            <ListGroup.Item className='mb-2'>{course.title}</ListGroup.Item>
                        </ListGroup></Link>)
                    }
                </div>
            </Col>
            <Col lg={8}>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                } 
            </Col>
            </Row>
        </Container>
    );
};

export default Courses;
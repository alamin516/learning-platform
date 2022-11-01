import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../../Course/Course/Course';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <>
            <div className='d-lg-none d-block'>
                {
                    courses.map(course => <Link key={course.id} className='text-decoration-none' to={`/course/${course.id}`}><ListGroup>
                        <ListGroup.Item className='mb-2'>{course.title}</ListGroup.Item>
                    </ListGroup></Link>)
                }
            </div>
            <div className='courses'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </>
    )
};

export default Courses;
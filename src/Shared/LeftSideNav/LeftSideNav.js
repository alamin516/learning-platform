import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';


const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])



    return (
        <div>
            {
                courses.map(course => <Link key={course.id} className='text-decoration-none' to={`/course/${course.id}`}><ListGroup>
                    <ListGroup.Item className='mb-2'>{course.title}</ListGroup.Item>
                </ListGroup></Link>)
            }
        </div>

    );
};

export default LeftSideNav;
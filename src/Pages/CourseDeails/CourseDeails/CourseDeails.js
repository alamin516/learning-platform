import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactDOM from "react-dom";
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';


const ref = React.createRef();

const CourseDeails = () => {
    const courseDeails = useLoaderData();
    const {title, description, price, image} = courseDeails;


    return (
        <div className='mb-5'>
            <h3>{title}</h3>
            <Image 
            style={{width: "100%"}}
            src={image}/>
            <p className='my-4'>{description}</p>
            <FaUser/>
        </div>
    );
};

export default CourseDeails;
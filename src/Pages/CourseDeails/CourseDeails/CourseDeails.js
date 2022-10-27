import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';


const ref = React.createRef();

const CourseDeails = () => {
    const courseDeails = useLoaderData();
    const { title, description, image } = courseDeails;


    return (
        <div className='mb-5'>
            <h3>{title}</h3>
            <Image
                style={{ width: "100%" }}
                src={image} />
            <p className='my-4'>{description}</p>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}></button>}
            </Pdf>
        </div>
    );
};

export default CourseDeails;
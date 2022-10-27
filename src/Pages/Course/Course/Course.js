import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Course({ course }) {
    const { id, title, description, price, image, certificate } = course;

    return (
        <Card className='d-flex'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>

                </Card.Text>
                <Link to={`/courses/${id}`}>Go somewhere</Link>
            </Card.Body>
        </Card>
    );
}

export default Course;
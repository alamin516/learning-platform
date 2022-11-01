import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

function Course({ course }) {
    const { id, title, description, price, image} = course;

    return (
        <CardGroup className="mb-4 card" >
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            description?.length > 250 ? <>{description.slice(0, 200) + '...'} <Link to={`/course/${id}`}>Read Me</Link> </> :
                                <>{description}</>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <p>Price:{price}</p>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

export default Course;
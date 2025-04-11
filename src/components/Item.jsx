import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router';

function Item ({item}) {
  return (
    <Col md={6} lg={3} sm={12}>
        <Card className='mb-4'>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.category}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
                <Button 
                variant="primary"
                as={Link}
                to={`/product/${item.id}`}
                >Ver mas</Button>
            </Card.Body>
        </Card>
  </Col>
  );
}

export default Item;
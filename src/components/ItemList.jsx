import Container from 'react-bootstrap/Container';
import Item from './Item';
import Row from 'react-bootstrap/Row';


function ItemList ({ items }) {
  return (
    <Container>
        <Row className='gap-4'>
            {items.map(item => <Item item={item} key = {item.id} />)}
        </Row>
  </Container>
  )
}

export default ItemList;
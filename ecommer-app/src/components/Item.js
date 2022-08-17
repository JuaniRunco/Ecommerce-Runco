import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const Item = ({ item }) => {

    return (
        <div>
            <Card style={{ margin: '1rem', paddingBottom: '15px', borderRadius: '10px' }} >
                <Card.Img style={{ height:'400px' }} variant="top" src={item.pictureUrl} alt="Item img" />
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text style={{ fontSize: '20px' }}>
                        {'$ '}{item.price}
                    </Card.Text>
                    <div className="btn">
                        <LinkContainer to={'/item/' + item.id}>
                            <Button variant="outline-primary" as="input" type="button" value="Ver detalle del producto" />
                        </LinkContainer>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item;
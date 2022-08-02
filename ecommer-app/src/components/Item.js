import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const Item = ({ item }) => {

    return (
        <div>
            <Card style={{ margin: '1rem', paddingBottom: '15px', borderRadius: '10px' }} >
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.desdescription}
                    </Card.Text>
                    <Card.Text style={{ fontSize: '20px' }}>
                        {item.price}
                    </Card.Text>
                    <div className="btn">
                        <LinkContainer to={'/item/' + item.id}>
                            <Button variant="outline-primary" as="input" type="button" value="Ver detalle del producto" />
                        </LinkContainer>
                    </div>
                    <ItemCount />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item;
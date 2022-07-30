import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";

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
                    <ItemCount />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item;
import { Row, Col, Button } from 'react-bootstrap'
import { FaTrash } from "react-icons/fa";


const Cart = ({ item, valueToShare }) => {
    return (
        <Col id={item.id} xs={12} className='d-flex align-items-center flex-column cartContainer mt-1 mb-2 '>
            <Row className='w-100 align-items-center'>
                <Col xs={3}>
                    <img style={{ width: '200px' }} src={item.pictureUrl} alt={item.title}></img>
                </Col>
                <Col xs={3}>
                    {item.quantity} x  {'unidades'} {item.title}
                </Col>
                <Col xs={2}>
                    {'Prec. Unit. $'}{item.price}
                </Col>
                <Col xs={2}>
                    ${item.price * item.quantity}
                </Col>
                <Col xs={2}>
                    <Button onClick={() => valueToShare.removeItem(item.id)}>
                        <FaTrash />
                    </Button>
                </Col>
            </Row>
        </Col>
    );
}

export default Cart;
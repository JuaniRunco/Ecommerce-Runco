import { useEffect, useState } from "react";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCount({ stock, onAdd }) {

    const [count, setCount] = useState(1);

    useEffect(() => {

        stock <= 0 ? setCount(0) : setCount(1);
    }, [stock])

    function incrementCount() {
        setCount(Math.min(count + 1, stock));
    }

    function decrementCount() {
        setCount(Math.max(count - 1, 0));
    }

    return (
        <>
            <Card style={{ width: '18rem', margin: '5rem', paddingBottom: '15px', borderRadius: '10px' }} >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <div style={{ textAlign: 'center' }}>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button style={{ padding: '0px 2px 5px', margin: '5px' }} variant="outline-light" href="#" disabled={stock <= count} onClick={incrementCount}>
                            <GrFormAdd />
                        </Button>{count}
                        <Button style={{ padding: '0px 2px 5px', margin: '5px' }} variant="outline-light" type="submit" disabled={count === 0} onClick={decrementCount}>
                            <GrFormSubtract />
                        </Button>{' '}
                    </div>
                </Card.Body>
                <div className="btn">
                    <Button variant="outline-primary" as="input" type="button" disabled={stock === 0 || count === 0} onClick={() => onAdd(count)} value="Agregar al Carrito" />{' '}
                    {stock === 0 ? <p style={{color : 'red'}}> No hay stock de este producto </p> : ''}
                </div>
            </Card>
        </>
    );

}

export default ItemCount;
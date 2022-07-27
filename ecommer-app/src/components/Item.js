import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { FcOk, FcCancel } from "react-icons/fc";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";

const Item = ({ item }) => {

    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(4);

    const onAdd = (value) => {
        setStock(Math.max(stock - value, 0));
    }

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
        <div>
            <Card style={{ margin: '1rem', paddingBottom: '15px', borderRadius: '10px' }} >
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Body>
                    <div style={{ textAlign: 'center' }}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.desdescription}
                        </Card.Text>
                        <Card.Text style={{ fontSize: '20px' }}>
                            {item.price}
                        </Card.Text>
                        <Button style={{ padding: '0px 2px 7px', margin: '5px', fontSize: '20px' }} variant="outline-light" type="submit" disabled={count === 0} onClick={decrementCount}>
                            <GrFormSubtract />
                        </Button>
                        {count}
                        <Button style={{ padding: '0px 2px 7px', margin: '5px', fontSize: '20px' }} variant="outline-light" type="submit" disabled={stock <= count} onClick={incrementCount}>
                            <GrFormAdd />
                        </Button>
                    </div>
                </Card.Body>
                <div className="btn">
                    <Button variant="outline-primary" as="input" href="#" type="button" value="Ver detalle del producto" />
                </div>
                <div className="btn">
                    <Button style={{ borderRadius: '21px' }} variant="outline-primary" as="input" type="button" disabled={stock === 0 || count === 0} onClick={() => onAdd(count)} value="Agregar" />
                </div>
                <div style={{ textAlign: 'center' }}>
                    {stock === 0 ? <><FcCancel style={{ marginBottom: '2px' }} /><span>No hay stock de este producto</span></> :
                        <><FcOk style={{ marginBottom: '2px' }} /><span>Producto con stock</span></>}
                </div>
            </Card>
        </div>
    );
}

export default Item;
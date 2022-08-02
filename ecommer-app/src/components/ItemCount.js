import { useEffect, useState } from "react";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { FcOk, FcCancel } from "react-icons/fc";
import Button from 'react-bootstrap/Button';

function ItemCount() {

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
            <Button style={{ padding: '0px 2px 7px', margin: '5px', fontSize: '20px' }} variant="outline-light" type="submit" disabled={count === 0} onClick={decrementCount}>
                <GrFormSubtract />
            </Button>
            {count}
            <Button style={{ padding: '0px 2px 7px', margin: '5px', fontSize: '20px' }} variant="outline-light" type="submit" disabled={stock <= count} onClick={incrementCount}>
                <GrFormAdd />
            </Button>
            <br />
            <div className="btn">
                <Button style={{ borderRadius: '21px' }} variant="outline-primary" as="input" type="button" disabled={stock === 0 || count === 0} onClick={() => onAdd(count)} value="Agregar" />
            </div>
            <div style={{ textAlign: 'center' }}>
                {stock === 0 ?
                    <>
                        <FcCancel style={{ marginBottom: '2px' }} /><span>No hay stock de este producto</span>
                    </> :
                    <>
                        <FcOk style={{ marginBottom: '2px' }} /><span>Producto con stock</span>
                    </>}
            </div>
        </div>
    );

}

export default ItemCount;
import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {

    const [stock, setStock] = useState(4);

    const onAdd = (value) => {
        setStock(Math.max(stock - value, 0));
    }

    return (
        <>
            <h1 style={{ textAlign: 'center', paddingTop: '20px' }}>
                {props.greeting}
            </h1>
            <ItemCount stock={stock} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;
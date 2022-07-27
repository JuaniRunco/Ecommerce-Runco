import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    /* const [stock, setStock] = useState(4); */
    const [items, setItems] = useState([]);

    const url = './data/items.json';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setItems(data);
                }, 2000);
            })
    }, []);

    /*const onAdd = (value) => {
        setStock(Math.max(stock - value, 0));
    } */

    return (
        <>
            <h1 style={{ textAlign: 'center', paddingTop: '20px' }}>
                {props.greeting}
            </h1>
            <ItemList items={items} />
            {/* <ItemCount stock={stock} onAdd={onAdd} /> */}
        </>
    );
}

export default ItemListContainer;
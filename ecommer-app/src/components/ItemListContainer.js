import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

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

    //console.log(items);
    return (
        <>
            <h1 style={{ textAlign: 'center', paddingTop: '20px' }}>
                {props.greeting}
            </h1>
            <ItemList items={items} />
        </>
    );
}

export default ItemListContainer;
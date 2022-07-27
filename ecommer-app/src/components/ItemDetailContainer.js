import { useEffect, useState } from "react";
import { getItem } from "../utils/api";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect(() => {

        const item = getItem();
        setItem(item);
    }, []);

    console.log(item)

    return (
        <>
            <ItemDetail item={item} />
        </>
    );
}

export default ItemDetailContainer;
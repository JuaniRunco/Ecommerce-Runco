import { useEffect, useState } from "react";
import { getItem } from "../utils/api";
import ItemDetail from "./ItemDetail";
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState();

    const obteinProduct = async () => {
        const found = await getItem();
        setProduct(found)
    }

    useEffect(() => {

        obteinProduct();
    }, []);

    return (
        <>
            {product ? <ItemDetail item={product} /> : <Spinner animation="border" />}
        </>
    );
}

export default ItemDetailContainer;
import { useEffect, useState } from "react";
import { getItem } from "../utils/api";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState();

    const obtainProduct = async () => {
        const found = await getItem();
        setProduct(found)
    }

    useEffect(() => {

        obtainProduct();
    }, []);

    return (
        <>
            {product ? <ItemDetail item={product} /> : <Loading/>}
        </>
    );
}

export default ItemDetailContainer;
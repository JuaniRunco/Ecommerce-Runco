import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../utils/api";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [product, setProduct] = useState();

    const obtainProduct = async () => {
        const found = await getItem(id);
        setProduct(found)
    }

    useEffect(() => {

        obtainProduct();
    }, []);

    return (
        <div style={{ background: 'rgb(242, 243, 244)', height: '100vh' }}>
            {product ? <ItemDetail item={product} /> : <Loading />}
        </div>
    );
}

export default ItemDetailContainer;
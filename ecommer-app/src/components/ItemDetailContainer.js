import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../utils/api";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    const obtainProduct = async () => {

        const found = await getItem(id);
        setProduct(found);
        setLoading(false);
    }

    useEffect(() => {
        obtainProduct();
        // eslint-disable-next-line
    }, []);

    return (
        <div style={{ background: 'rgb(242, 243, 244)', height: '100vh', textAlign: 'center' }}>
            {loading && <Loading />}
            {product ?
                <ItemDetail item={product} />
                :
                <h1 style={{ paddingTop: '20px' }}>
                    404 NOT FOUND
                </h1>
            }
        </div>
    );
}

export default ItemDetailContainer;
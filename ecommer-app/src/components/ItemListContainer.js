import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../utils/api";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = (props) => {

    const { categoryId } = useParams();
    const [items, setItems] = useState();

    const obtainProduct = async () => {
        const found = await getCategory(categoryId);
        setItems(found);
    }

    useEffect(() => {
        setItems(null);
        obtainProduct();
    }, [categoryId]);

    return (
        <div>
            <h1 style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '10px', fontSize: '45px' , height: '100%' }}>
                {props.greeting}
            </h1>
            {items ? <ItemList items={items} /> : <Loading />}
        </div>
    );
}

export default ItemListContainer;
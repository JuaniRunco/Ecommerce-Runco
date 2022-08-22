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
            <h1 style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '10px', fontSize: '70px' , height: '100%',fontFamily:'Roboto, sans-serif' }}>
                {props.greeting}
            </h1>
            <h2 style={{ textAlign: 'center'}} className="text-uppercase">{categoryId}</h2>
            {items ? <ItemList items={items} /> : <Loading />}
        </div>
    );
}

export default ItemListContainer;
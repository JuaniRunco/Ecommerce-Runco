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
        <div style={{ background: 'rgb(240, 243, 244)', height: categoryId !== undefined ? '100vh' : '100%' }}>
            <div style={{ paddingTop: '40px', paddingBottom: '10px' }}>
                <h1 style={{ textAlign: 'center', fontSize: '70px', height: '100%', fontFamily: 'Roboto, sans-serif' }}>
                    {props.greeting}
                </h1>
            </div>
            <div>
                <h2 style={{ textAlign: 'center' }} className="text-uppercase">{categoryId}</h2>
                {items ?
                    <ItemList items={items} />
                    :
                    <Loading />
                }
            </div>
        </div >
    );
}

export default ItemListContainer;
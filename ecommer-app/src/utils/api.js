import { useState } from "react";

export const getItem = () => {

    const url = './data/items.json';
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [product, setProduct] = useState({});

    fetch(url)
        .then(response => response.json())
        .then(response =>
            setProduct(response.product.find(product => product.idProduct === 1)))

    console.log(product)
    return product;
}

/* setTimeout(() => { */
/*  }, 2000); */
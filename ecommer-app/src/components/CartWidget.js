import { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

    const valueToShare = useContext(CartContext);
    console.log("Contenido del carrito: \n", valueToShare.cart);
    return (
        <>
            <TiShoppingCart style={{ fontSize: '25px', color: 'white' }} />
            {valueToShare.cantInCart}
        </>
    );
}

export default CartWidget;

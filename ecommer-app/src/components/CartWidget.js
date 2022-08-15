import { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

    const { cantInCart } = useContext(CartContext);

    if (cantInCart === 0) {
        return <></>;
    }

    return (
        <>
            <TiShoppingCart style={{ fontSize: '25px', color: 'white' }} />
            {cantInCart}
        </>
    );
}

export default CartWidget;

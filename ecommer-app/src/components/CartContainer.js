import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";

const CartContainer = () => {

    const valueToShare = useContext(CartContext);

    return (
        <div>
            <CartList valueToShare={valueToShare} />
        </div>
    );
}

export default CartContainer;
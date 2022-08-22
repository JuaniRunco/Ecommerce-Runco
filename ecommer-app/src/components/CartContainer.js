import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";
import OrderContainerModal from "./OrderContainerModal";

const CartContainer = () => {

    const valueToShare = useContext(CartContext);

    return (
        <div>
            <CartList valueToShare={valueToShare} />
            {valueToShare.cart.length > 0 ?
                <div className="container">
                    <OrderContainerModal valueToShare={valueToShare} />
                </div>
                :
                <></>
            }
        </div>
    );
}

export default CartContainer;
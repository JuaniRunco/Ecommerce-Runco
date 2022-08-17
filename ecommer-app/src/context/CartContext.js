import { createContext, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {

        const find = isInCart(item.id);
        if (find) {

            //Creo borrador del carrito
            const cartDraft = [...cart];
            //Busco el item en la lista
            const productFound = cartDraft.find((itemInCart) => itemInCart.id === item.id);
            //Busco su posicion en la lista
            const productIndex = cartDraft.indexOf(productFound);
            //Actualizo la cantidad
            cartDraft[productIndex].quantity += quantity;
            //Guardo la lista actualizada
            setCart(cartDraft);
        } else {

            const cartDraft = [...cart, { ...item, quantity: quantity }]
            setCart(cartDraft);
        }
    }

    const isInCart = (id) => {

        if (cart.find((itemInCart) => itemInCart.id === id)) {
            return true;
        } else {
            return false;
        }
    }

    const removeItem = (itemId) => {

        const cartDraft = [...cart];
        setCart(cartDraft.filter((itemInCart) => itemInCart.id !== itemId));
    }

    const cleanCart = () => {
        setCart([]);
    }

    const cantInCart = cart.reduce(
        (init, item) => init + item.quantity, 0);

    const totalPrice = cart.reduce(
        (price, item) => price + (item.price * item.quantity), 0);

    const valueToShare = {
        cart,
        cantInCart,
        isInCart,
        cleanCart,
        addItem,
        removeItem,
        totalPrice
    };

    return (
        <CartContext.Provider
            value={valueToShare}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


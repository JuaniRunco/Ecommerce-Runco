import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Cart from "./Cart";

const CartList = ({ valueToShare }) => {
    return (
        <div className="container d-flex flex-column mt-6">
            {valueToShare.cart.length > 0 ?
                <div className="row">
                    <div className="col">
                        <div className="col" style={{ margin: '40px 0px' }}>
                            <h1>Carrito de Compras</h1>
                        </div>
                        {
                            valueToShare.cart.map((item, i) => (
                                <div className="col" key={i} style={{ paddingBottom: '10px' }}>
                                    <Cart key={item.id} item={item} valueToShare={valueToShare} />
                                </div>
                            ))
                        }
                        <hr />
                        <div className="row">
                            <div className="col">
                                <h3>
                                    Total de la compra
                                </h3>
                            </div>
                            <div className="col" style={{ textAlign: 'end' }}>
                                <h3 >
                                    {'$'}{valueToShare.totalPrice}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div style={{ textAlign: 'center' }}>
                    <h2>No hay elementos en el carrito</h2>
                    <LinkContainer to='/' >
                        <Button>Seguir Comprando</Button>
                    </LinkContainer>
                </div>
            }
        </div >
    );
}

export default CartList;
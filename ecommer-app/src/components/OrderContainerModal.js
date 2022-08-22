import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2'

const OrderContainerModal = ({ valueToShare }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const data = {
        userName: '',
        email: '',
        phone: ''
    };

    const [user, setUser] = useState(data);

    const captureInputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const sendOrder = () => {
        const newOrder = {
            buyer: user,
            items: valueToShare.cart,
            total: valueToShare.totalPrice
        }

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, newOrder)
            .then(({ id }) => idAlert(id))
            .catch((error) => alert(error))

        valueToShare.cleanCart();
    };

    const idAlert = (id) => {
        Swal.fire({
            title: "Gracias por tu compra!",
            html: "Este es tu id de seguimiento: <b>" + id + "</b>",
            icon: 'success'
        })
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Finalizar Compra
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Formulario de Compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Ingresa tu nombre</Form.Label>
                            <Form.Control
                                name='userName'
                                onChange={captureInputs}
                                value={user.userName}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Ingresa tu email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name='email'
                                onChange={captureInputs}
                                value={user.email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Ingresa tu celular</Form.Label>
                            <Form.Control
                                name='phone'
                                onChange={captureInputs}
                                value={user.phone} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={sendOrder}>
                        Generar Orden
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default OrderContainerModal;
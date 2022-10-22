import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Update = ({ show, handleClose, id }) => {

    const [data, setData] = useState({
        name: "",
        amount: "",
        type: ""
    });

    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const updateProducto = (e) => {
        e.preventDefault();
        try {
            fetch("http://localhost/products/?insert=1", {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify(data)
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Update product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={updateProducto}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" id="name" name="name" value={data.name} onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" placeholder="Enter amount" id="amount" name="amount" value={data.amount} onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" placeholder="Enter type" id="type" name="type" value={data.type} onChange={handleOnChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit"> Update product </Button>{' '}
                    <Button variant="danger" onClick={handleClose}>Cancel</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Update;

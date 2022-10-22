import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchProduct, updateProduct } from "../../redux/actions/productActions";

const Update = ({ show, handleClose, id }) => {

    const dispatch = useDispatch();

    const { product } = useSelector((state) => state.products);

    const [data, setData] = useState({
        name: "",
        amount: "",
        type: ""
    });

    useEffect(() => {
        if (id !== undefined) {
            dispatch(fetchProduct(id))
        }
    }, [id]);

    useEffect(() => {
        setData({
            name: product?.name,
            amount: product?.amount,
            type: product?.type
        })
    }, [product]);


    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const updateProducto = (e) => {
        e.preventDefault();
        dispatch(updateProduct({ data, id }))
        dispatch(fetchAllProducts())
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Update product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={updateProducto}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" id="name" name="name" defaultValue={product?.name} value={data?.name} onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" placeholder="Enter amount" id="amount" name="amount" defaultValue={product?.amount} value={data?.amount} onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" placeholder="Enter type" id="type" name="type" defaultValue={product?.type} value={data?.type} onChange={handleOnChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit"> Update product </Button>{' '}
                    <Button variant="danger" onClick={handleClose}>Cancel</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Update;

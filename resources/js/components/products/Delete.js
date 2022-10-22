import React from "react";
import { useDispatch } from "react-redux";

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// actions
import { fetchAllProducts, deleteProduct } from "../../redux/actions/productActions";

const Delete = ({ show, handleClose, productDelete }) => {

    const dispatch = useDispatch();

    const handleDeleteProduct = () => {
        dispatch(deleteProduct(productDelete.id))
        dispatch(fetchAllProducts())
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Delete product {productDelete.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this product?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleDeleteProduct}>Delete</Button>
                <Button variant="primary" onClick={handleClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Delete;
import React from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../../redux/actions/productActions";

const Delete = ({ show, handleClose, productDelete }) => {

    const dispatch = useDispatch();

    const deleteProduct = (id) => {
        try {
            fetch(`http://localhost/products/?delete=${productDelete.id}`, {
                // method: "DELETE",
                mode: "no-cors",
                // body: JSON.stringify({ id })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    dispatch(fetchAllProducts())

                })
                .catch(error => console.log(error));
            handleClose()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Delete product ${productDelete.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this product?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => deleteProduct(productDelete.id)}>Delete</Button>
                <Button variant="primary" onClick={handleClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Delete;

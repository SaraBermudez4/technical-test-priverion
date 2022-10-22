import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/actions/productActions";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Create from "./Create";
import Update from "./Update";
import Delete from "./Delete";

const List = () => {

    const dispatch = useDispatch();

    const { products, loading } = useSelector((state) => state.products);

    const [showCreate, setShowCreate] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const [productDelete, setProductDelete] = useState({});
    const [productUpdateId, setProductUpdateId] = useState();

    const handleCloseCreate = () => setShowCreate(false);
    const handleShowCreate = () => setShowCreate(true);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    if (loading) { return (<Spinner animation="border" variant="info" />) }

    return (
        <>
            <Create show={showCreate} handleClose={handleCloseCreate} />
            <Update show={showUpdate} handleClose={handleCloseUpdate} id={productUpdateId} />
            <Delete show={showDelete} handleClose={handleCloseDelete} productDelete={productDelete} />
            <Card>
                <Card.Header>
                    Products Lists{' '}
                    <Button variant="outline-primary" onClick={handleShowCreate}>
                        Create Product
                    </Button>
                </Card.Header>
                <Card.Body className="card-body">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((product, index) => (
                                <tr key={index}>
                                    <td scope="row">{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.amount}</td>
                                    <td>{product.type}</td>
                                    <td>
                                        <Button variant="outline-primary" onClick={() => {
                                            setProductUpdateId(product.id)
                                            handleShowUpdate()
                                        }}>Update</Button>{' '}
                                        <Button variant="outline-danger" onClick={() => {
                                            setProductDelete(product)
                                            handleShowDelete()
                                        }}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
};

export default List;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// react-bootstrap
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// project imports
import Create from "./Create";
import Update from "./Update";
import Delete from "./Delete";

// actions
import { fetchAllProducts } from "../../redux/actions/productActions";

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
                <Card.Header style={{ background: 'rgb(248 255 154 / 93%)' }}>
                    <Row>
                        <Col xs={10}>
                            <h5>Products Lists{' '}</h5>
                        </Col>
                        <Col xs={2}>
                            <Button variant="outline-primary" onClick={handleShowCreate}>
                                Create Product
                            </Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className="card-body">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Trademark</th>
                                <th>Category</th>
                                <th>Age</th>
                                <th>Price</th>
                                <th>quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((product, index) => (
                                <tr key={index}>
                                    <td scope="row">{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.trademark}</td>
                                    <td>{product.category}</td>
                                    <td>{product.age}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
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

import React from "react";
import { useDispatch } from "react-redux";

// third imports
import { Formik } from 'formik';
import * as yup from 'yup';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// actions
import { fetchAllProducts, postProduct } from "../../redux/actions/productActions";

const Create = ({ show, handleClose }) => {

    const dispatch = useDispatch();

    const validationSchema = yup.object({
        name: yup.string()
            .required('The name is required')
            .test('valid', 'Only letters are accepted', value => /^(?!\s)^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(value))
            .max(255, 'The name must be less than 255 characters'),
        trademark: yup.string()
            .required('The trademark is required')
            .max(255, 'The trademark must be less than 255 characters'),
        category: yup.string()
            .required('The category is required')
            .max(255, 'The category must be less than 255 characters'),
        age: yup.string()
            .required('The age is required')
            .max(255, 'The age must be less than 255 characters'),
        price: yup.string()
            .required('The price is required')
            .test('valid', 'Only numbers are accepted', value => /^[0-9]+$/.test(value))
            .max(255, 'The price must be less than 255 characters'),
        quantity: yup.string()
            .required('The quantity is required')
            .test('valid', 'Only numbers are accepted', value => /^[0-9]+$/.test(value))
            .max(255, 'The quantity must be less than 255 characters'),
    });

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header style={{ background: 'rgb(247 204 59 / 86%)' }}>
                <Modal.Title>Create product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container fluid>
                    <Formik initialValues={{
                        name: "",
                        trademark: "",
                        category: "",
                        age: "",
                        price: "",
                        quantity: "",
                    }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            dispatch(postProduct({ data: values }))
                            dispatch(fetchAllProducts())
                            handleClose()
                        }}>
                        {({ values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name"
                                        id="name"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{ border: touched.name && errors.name ? "border: 2px solid #FF6565" : "1px solid #ced4da" }}
                                    />
                                    {touched.name && errors.name ? (
                                        <div style={{
                                            color: '#FF6565',
                                            padding: '.5em .2em',
                                            height: '1em',
                                            position: 'absolute',
                                            fontSize: '.8em',
                                        }}>{errors.name}</div>
                                    ) : null}
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Trademark</Form.Label>
                                            <Form.Control
                                                as="select"
                                                id="trademark"
                                                name="trademark"
                                                value={values.trademark}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ border: touched.name && errors.name ? "border: 2px solid #FF6565" : "1px solid #ced4da" }}
                                            >
                                                <option>Select...</option>
                                                <option>Lego</option>
                                                <option>Marvel</option>
                                                <option>Barbie</option>
                                            </Form.Control>
                                            {touched.trademark && errors.trademark ? (
                                                <div style={{
                                                    color: '#FF6565',
                                                    padding: '.5em .2em',
                                                    height: '1em',
                                                    position: 'absolute',
                                                    fontSize: '.8em',
                                                }}>{errors.trademark}</div>
                                            ) : null}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Category</Form.Label>
                                            <Form.Control
                                                as="select"
                                                id="category"
                                                name="category"
                                                value={values.category}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ border: touched.name && errors.name ? "border: 2px solid #FF6565" : "1px solid #ced4da" }}
                                            >
                                                <option>Select...</option>
                                                <option>Table games</option>
                                                <option>Action figures</option>
                                                <option>Teddies</option>
                                                <option>Blocks and construction</option>
                                            </Form.Control>
                                            {touched.category && errors.category ? (
                                                <div style={{
                                                    color: '#FF6565',
                                                    padding: '.5em .2em',
                                                    height: '1em',
                                                    position: 'absolute',
                                                    fontSize: '.8em',
                                                }}>{errors.category}</div>
                                            ) : null}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control
                                        as="select"
                                        id="age"
                                        name="age"
                                        value={values.age}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{ border: touched.name && errors.name ? "border: 2px solid #FF6565" : "1px solid #ced4da" }}
                                    >
                                        <option>Select...</option>
                                        <option>0-12m</option>
                                        <option>1-3a</option>
                                        <option>4-6a</option>
                                        <option>+12</option>
                                    </Form.Control>
                                    {touched.age && errors.age ? (
                                        <div style={{
                                            color: '#FF6565',
                                            padding: '.5em .2em',
                                            height: '1em',
                                            position: 'absolute',
                                            fontSize: '.8em',
                                        }}>{errors.age}</div>
                                    ) : null}
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter price"
                                                id="price"
                                                name="price"
                                                value={values.price}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ border: touched.name && errors.name ? "border: 2px solid #FF6565" : "1px solid #ced4da" }}
                                            />
                                            {touched.price && errors.price ? (
                                                <div style={{
                                                    color: '#FF6565',
                                                    padding: '.5em .2em',
                                                    height: '1em',
                                                    position: 'absolute',
                                                    fontSize: '.8em',
                                                }}>{errors.price}</div>
                                            ) : null}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter quantity"
                                                id="quantity"
                                                name="quantity"
                                                value={values.quantity}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ border: touched.name && errors.name ? "border: 2px solid #FF6565" : "1px solid #ced4da" }}
                                            />
                                            {touched.quantity && errors.quantity ? (
                                                <div style={{
                                                    color: '#FF6565',
                                                    padding: '.5em .2em',
                                                    height: '1em',
                                                    position: 'absolute',
                                                    fontSize: '.8em',
                                                }}>{errors.quantity}</div>
                                            ) : null}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="primary" type="submit" disabled={isSubmitting}> Create product </Button>{' '}
                                <Button variant="danger" onClick={handleClose}>Cancel</Button>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </Modal.Body>
        </Modal>
    );
};

export default Create;

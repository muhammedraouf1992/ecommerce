import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import axiosClient from "../../../axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const [cartData, setCartData] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputData, setInputData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        zip_code: "",
        city: "",
        state: "",
    });

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get("/cart")
            .then(({ data }) => {
                setCartData(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data);

                setLoading(false);
            });
    }, []);
    const totalPrice = cartData.reduce(
        (accumulator, currentValue) =>
            accumulator +
            currentValue.product.selling_price * currentValue.product_quantity,
        0
    );
    const order_data = {
        first_name: inputData.first_name,
        last_name: inputData.last_name,
        email: inputData.email,
        phone: inputData.phone,
        address: inputData.address,
        zip_code: inputData.zip_code,
        city: inputData.city,
        state: inputData.state,
        payment_method: "paid by paypal",
        payment_id: "",
    };
    const handleChange = (en) => {
        setInputData({ ...inputData, [en.target.name]: en.target.value });
    };
    const handleSubmit = (e, payment_method) => {
        e.preventDefault();

        const data = {
            first_name: inputData.first_name,
            last_name: inputData.last_name,
            email: inputData.email,
            phone: inputData.phone,
            address: inputData.address,
            zip_code: inputData.zip_code,
            city: inputData.city,
            state: inputData.state,
            payment_method: payment_method,
        };

        switch (payment_method) {
            case "cod":
                axiosClient
                    .post("/make-order", data)
                    .then((data) => {
                        console.log(data);
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                        setErrors(error.response.data);
                    });
                break;
            case "payonline":
                axiosClient
                    .post("/validate-order", data)
                    .then((data) => {
                        console.log(data);
                        setErrors([]);
                        handleShow();
                    })
                    .catch((error) => {
                        console.log(error.response.data.errors);
                        setErrors(error.response.data.errors);
                    });
                break;
            default:
                break;
        }
    };
    if (loading) {
        return <h1 className="bg-danger">loading......</h1>;
    }

    return (
        <>
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Paypal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Paypal price={totalPrice} order_data={order_data} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            {cartData.length == 0 ? (
                <h1>your cart is empty</h1>
            ) : (
                <>
                    <Col lg={7}>
                        <Card>
                            <Card.Header>Basic Information</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            md="6"
                                            controlId="validationCustom01"
                                        >
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="First name"
                                                name="first_name"
                                                onChange={handleChange}
                                                value={inputData.first_name}
                                            />
                                            <span className="text-danger">
                                                {errors.first_name
                                                    ? errors.first_name[0]
                                                    : null}
                                            </span>
                                        </Form.Group>
                                        <Form.Group
                                            as={Col}
                                            md="6"
                                            controlId="validationCustom02"
                                        >
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Last name"
                                                name="last_name"
                                                onChange={handleChange}
                                                value={inputData.last_name}
                                            />
                                            <span className="text-danger">
                                                {errors.last_name
                                                    ? errors.last_name[0]
                                                    : null}
                                            </span>
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group
                                            as={Col}
                                            md="6"
                                            controlId="validationCustom03"
                                        >
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                onChange={handleChange}
                                                value={inputData.email}
                                            />
                                            <span className="text-danger">
                                                {errors.email
                                                    ? errors.email[0]
                                                    : null}
                                            </span>
                                        </Form.Group>
                                        <Form.Group
                                            as={Col}
                                            md="6"
                                            controlId="validationCustom04"
                                        >
                                            <Form.Label>
                                                Phone number
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Phone Number"
                                                name="phone"
                                                onChange={handleChange}
                                                value={inputData.phone}
                                            />
                                            <span className="text-danger">
                                                {errors.phone
                                                    ? errors.phone[0]
                                                    : null}
                                            </span>
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group
                                            className="my-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>address</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                name="address"
                                                onChange={handleChange}
                                                value={inputData.address}
                                            />
                                            <span className="text-danger">
                                                {errors.address
                                                    ? errors.address[0]
                                                    : null}
                                            </span>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            md="6"
                                            controlId="validationCustom03"
                                        >
                                            <Form.Label>City</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="City"
                                                name="city"
                                                onChange={handleChange}
                                                value={inputData.city}
                                            />
                                            <span className="text-danger">
                                                {errors.city
                                                    ? errors.city[0]
                                                    : null}
                                            </span>
                                        </Form.Group>
                                        <Form.Group
                                            as={Col}
                                            md="3"
                                            controlId="validationCustom04"
                                        >
                                            <Form.Label>State</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="State"
                                                name="state"
                                                onChange={handleChange}
                                                value={inputData.state}
                                            />
                                            <span className="text-danger">
                                                {errors.state
                                                    ? errors.state[0]
                                                    : null}
                                            </span>
                                        </Form.Group>
                                        <Form.Group
                                            as={Col}
                                            md="3"
                                            controlId="validationCustom05"
                                        >
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Zip"
                                                name="zip_code"
                                                onChange={handleChange}
                                                value={inputData.zip_code}
                                            />
                                            <span className="text-danger">
                                                {errors.zip_code
                                                    ? errors.zip_code[0]
                                                    : null}
                                            </span>
                                        </Form.Group>
                                    </Row>

                                    <Button
                                        type="submit"
                                        onClick={(e) => handleSubmit(e, "cod")}
                                    >
                                        Submit form
                                    </Button>
                                    <Button
                                        type="submit"
                                        onClick={(e) =>
                                            handleSubmit(e, "payonline")
                                        }
                                    >
                                        Pay Online
                                    </Button>
                                    {/* <Paypal /> */}
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>product name</th>
                                    <th>price</th>
                                    <th>quantity</th>
                                    <th>total price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData.map((d) => (
                                    <tr key={d.id}>
                                        <td>{d.product.title}</td>
                                        <td>{d.product.selling_price}</td>

                                        <td>{d.product_quantity}</td>
                                        <td>
                                            {d.product.selling_price *
                                                d.product_quantity}
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td
                                        colSpan={2}
                                        className="fw-bold text-capitalize text-end"
                                    >
                                        grand total
                                    </td>
                                    <td
                                        colSpan={2}
                                        className="fw-bold text-capitalize text-end"
                                    >
                                        {totalPrice}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </>
            )}
        </>
    );
};

export default Checkout;

import React, { useEffect, useState } from "react";
import axiosClient from "../../../axios";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const fetchData = () => {
        axiosClient
            .get("/cart")
            .then(({ data }) => {
                console.log(data.data);
                setCartData(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                if (error.response.status === 401) {
                    setError("you have to login to view your cart items");
                }
                setLoading(false);
            });
    };
    useEffect(() => {
        setLoading(true);
        axiosClient
            .get("/cart")
            .then(({ data }) => {
                console.log(data.data);
                setCartData(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                if (error.response.status === 401) {
                    setError("you have to login to view your cart items");
                }
                setLoading(false);
            });
    }, []);
    const handleMinus = (cart_id) => {
        setCartData((cart) =>
            cart.map((item) =>
                cart_id === item.id
                    ? {
                          ...item,
                          product_quantity:
                              item.product_quantity > 1
                                  ? item.product_quantity - 1
                                  : 1,
                      }
                    : item
            )
        );
        refreshQuantity(cart_id, "dec");
    };
    const handlePlus = (cart_id) => {
        setCartData((cart) =>
            cart.map((item) => {
                return cart_id == item.id
                    ? {
                          ...item,
                          product_quantity:
                              item.product_quantity < 10
                                  ? item.product_quantity + 1
                                  : 10,
                      }
                    : item;
            })
        );
        refreshQuantity(cart_id, "inc");
    };
    const refreshQuantity = (id, scope) => {
        axiosClient
            .post(`/update-cart/${id}/${scope}`)
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const onDelete = (cart_id) => {
        alert("are you sure you want to remove this item?");

        axiosClient
            .delete(`/cart-delete/${cart_id}`)
            .then((data) => console.log(data))
            .catch((error) => {
                console.log(error);
            });
        fetchData();
    };
    if (loading) {
        return <h1 className="bg-danger">loading......</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    const totalPrice = cartData.reduce(
        (accumulator, currentValue) =>
            accumulator +
            currentValue.product.selling_price * currentValue.product_quantity,
        0
    );

    return (
        <Container>
            <div>
                {cartData.length == 0 ? (
                    <h1>there is no items in the cart</h1>
                ) : (
                    <>
                        <Row>
                            <Col>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>product image</th>
                                            <th>product name</th>
                                            <th>price</th>
                                            <th>quantity</th>
                                            <th>total price</th>
                                            <th>actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartData.map((d) => (
                                            <tr key={d.id}>
                                                <td>
                                                    <img
                                                        src={`http://127.0.0.1:8000/${d.product.image}`}
                                                        alt=""
                                                        style={{
                                                            width: "100px",
                                                        }}
                                                    />
                                                </td>
                                                <td>{d.product.title}</td>
                                                <td>
                                                    {d.product.selling_price}
                                                </td>

                                                <td>
                                                    <InputGroup className="mb-3 mt-3">
                                                        <Button
                                                            onClick={() =>
                                                                handleMinus(
                                                                    d.id
                                                                )
                                                            }
                                                        >
                                                            -
                                                        </Button>
                                                        <div className="px-3 py-1 text-center">
                                                            {d.product_quantity}
                                                        </div>
                                                        <Button
                                                            onClick={() =>
                                                                handlePlus(d.id)
                                                            }
                                                        >
                                                            +
                                                        </Button>
                                                    </InputGroup>
                                                </td>
                                                <td>
                                                    {d.product.selling_price *
                                                        d.product_quantity}
                                                </td>
                                                <td>
                                                    <Button
                                                        variant="danger"
                                                        onClick={() =>
                                                            onDelete(d.id)
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-end">
                            <Col sm={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            subtotal :{totalPrice}$
                                        </Card.Title>
                                        <Card.Title>
                                            total :{totalPrice}$
                                        </Card.Title>

                                        <Link
                                            className="btn btn-success btn-sm"
                                            to="/checkout"
                                        >
                                            Checkout
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </>
                )}
            </div>
        </Container>
    );
};

export default Cart;

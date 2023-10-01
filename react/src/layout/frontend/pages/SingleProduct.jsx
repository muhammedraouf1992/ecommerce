import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../../axios";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

const SingleProduct = () => {
    const params = useParams();
    const [productCount, setProductCount] = useState(1);
    const [fetchData, setFetchData] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`/product/${params.id}`)
            .then(({ data }) => {
                setFetchData(data.data);
                setLoading(false);
                console.log(data.data);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <h1>loading.......</h1>;
    }
    const handleMinus = () => {
        if (productCount > 1) {
            setProductCount((prev) => prev - 1);
        }
    };
    const handlePlus = () => {
        if (productCount < 10) {
            setProductCount((prev) => prev + 1);
        }
    };
    const addToCart = (e) => {
        e.preventDefault;
        const data = {
            product_id: fetchData.id,
            product_quantity: productCount,
        };
        axiosClient
            .post("/add-to-cart", data)
            .then((data) => {
                console.log(data);

                if (data.status === 200) {
                    setMessage("product added successfully");
                }
            })
            .catch((error) => {
                console.log(error);
                if (error.response.status === 401) {
                    setMessage("you have to login to add to cart");
                }
                if (error.response.status === 409) {
                    setMessage("product already exists");
                }
                if (error.response.status === 404) {
                    setMessage("product doesnt exists");
                }
            });
    };
    return (
        <>
            <Container className="space" fluid="xl">
                <Row>
                    {message && <h1>{message}</h1>}

                    <Col lg={5} md={6} sm={12}>
                        <img
                            src={`http://127.0.0.1:8000/${fetchData.image}`}
                            alt=""
                            width={"100%"}
                            className="rounded"
                        />
                    </Col>
                    <Col lg={7} md={6} sm={12}>
                        <div>
                            <h1 className="text-capitalize">
                                {fetchData.title}
                            </h1>
                            <p className="text-capitalize">
                                {fetchData.description}
                            </p>
                        </div>
                        <div>
                            <span className="mr-5 text-danger fs-4">
                                <s>{fetchData.original_price}$</s>
                            </span>
                            <span className="fs-4">
                                {fetchData.selling_price}$
                            </span>
                        </div>
                        <div>
                            {fetchData.quantity > 0 ? (
                                <span className="py-2 px-4 bg-success text-white mt-2 d-inline-block text-uppercase">
                                    in stock
                                </span>
                            ) : (
                                <span className="py-2 px-4 bg-danger text-white mt-2 d-inline-block text-uppercase">
                                    out of stock
                                </span>
                            )}
                        </div>

                        {fetchData.quantity > 0 && (
                            <Row>
                                <Col md={3}>
                                    <InputGroup className="mb-3 mt-3">
                                        <Button onClick={handleMinus}>-</Button>
                                        <div className="px-3 py-1 text-center">
                                            {productCount}
                                        </div>
                                        <Button onClick={handlePlus}>+</Button>
                                    </InputGroup>
                                </Col>

                                <Col md={3} className="mt-3">
                                    <Button onClick={addToCart}>
                                        Add to Cart
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SingleProduct;

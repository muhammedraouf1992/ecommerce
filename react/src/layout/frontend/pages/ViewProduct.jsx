import React, { useEffect, useState } from "react";
import axiosClient from "../../../axios";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
const ViewProduct = () => {
    const params = useParams();

    const [fetchData, setFetchData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axiosClient
            .get("/product")
            .then(({ data }) => {
                const filteredArray = data.data.filter((f) => {
                    return f.category_id == params.id;
                });
                setFetchData(filteredArray);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <h1>loading.......</h1>;
    }
    return (
        <>
            <Container>
                <Row>
                    {fetchData.map((f) => (
                        <Col lg={4} md={6} sm={12} key={f.id}>
                            <Card>
                                {f.quantity == 0 && <p>out of stock</p>}
                                <Card.Img
                                    variant="top"
                                    src={`http://127.0.0.1:8000/${f.image}`}
                                />
                                <Card.Body>
                                    <Card.Title>{f.title}</Card.Title>
                                    <Card.Text>{f.description}</Card.Text>
                                    <Card.Text>
                                        original price:
                                        <span className="text-danger">
                                            {f.original_price}
                                        </span>
                                    </Card.Text>
                                    <Card.Text>
                                        selling price :{f.selling_price}
                                    </Card.Text>
                                    <Link to={`/single-product/${f.id}`}>
                                        <Button variant="primary">
                                            view product
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default ViewProduct;

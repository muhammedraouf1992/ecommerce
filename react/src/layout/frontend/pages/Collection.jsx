import React, { useEffect, useState } from "react";
import axiosClient from "../../../axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
const Collection = () => {
    const [fetchData, setFetchData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axiosClient
            .get("/category")
            .then(({ data }) => {
                const filteredArray = data.data.filter((f) => f.status != 1);
                setFetchData(filteredArray);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h1>loading........</h1>;
    }

    return (
        <Container>
            <Row>
                {fetchData.length < 1 ? (
                    <h1 className="text-danger text-uppercase">
                        there is no categories to be shows
                    </h1>
                ) : (
                    fetchData.map((f) => (
                        <Col lg={4} md={6} sm={12} key={f.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-capitalize">
                                        {f.title}
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {f.slug}
                                    </Card.Subtitle>
                                    <Card.Text>{f.description}</Card.Text>
                                    <Card.Link href={`product/${f.id}`}>
                                        View Products
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default Collection;

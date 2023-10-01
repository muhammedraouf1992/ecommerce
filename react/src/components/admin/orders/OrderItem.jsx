import React, { useEffect, useState } from "react";
import axiosClient from "../../../axios";
import { Link, useParams } from "react-router-dom";

import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const OrderItem = () => {
    const params = useParams();
    const [fetchedData, setFetchedData] = useState([]);
    const [status, setStatus] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`/orderItems/${params.id}`)
            .then(({ data }) => {
                console.log(data.data);
                setFetchedData(data.data);

                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    const handleChange = (e) => {
        setStatus(e.target.value);
        console.log(status);
    };
    const handleSubmit = (e) => {
        const formData = { status: status ? 1 : 0 };
        e.preventDefault();
        axiosClient
            .post(`/edit-order-status/${params.id}`, formData)
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div>
            {loading ? (
                <h1 className="text-danger">loading.......</h1>
            ) : (
                <Row>
                    <Col lg={8}>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p>id</p>
                                <p>fullname </p>

                                <p>tracking number</p>
                                <p>status</p>
                                <p>actions</p>
                            </div>
                            {fetchedData.length > 0 && (
                                <div>
                                    <p>{fetchedData[0].id}</p>
                                    <p>
                                        {fetchedData[0].order.first_name +
                                            " " +
                                            fetchedData[0].order.last_name}
                                    </p>
                                    <p>
                                        {fetchedData[0].order.tracking_number}
                                    </p>
                                    <form onSubmit={handleSubmit}>
                                        <select
                                            name="status"
                                            onChange={handleChange}
                                            defaultValue={
                                                // status = 0 not shipped 1=shipped
                                                fetchedData[0].order.status
                                                    ? "1"
                                                    : "0"
                                            }
                                        >
                                            <option value="0">
                                                not shipped
                                            </option>
                                            <option value="1">shipped</option>
                                        </select>
                                        <Button
                                            variant="warning"
                                            type="submit"
                                            className="d-block"
                                        >
                                            Edit
                                        </Button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </Col>

                    {fetchedData.map((data) => (
                        <Row key={data.id}>
                            <Col lg={2}>
                                <div>
                                    <img
                                        src={`http://127.0.0.1:8000/${data.product.image}`}
                                        alt=""
                                        width={"100%"}
                                    />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <h6 className="fs-2">
                                        {data.product.title}
                                    </h6>
                                    <h6 className="fs-4">
                                        {data.product.selling_price}$
                                    </h6>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default OrderItem;

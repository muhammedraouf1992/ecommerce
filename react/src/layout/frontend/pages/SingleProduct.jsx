import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../../axios";
import Col from "react-bootstrap/esm/Col";
const SingleProduct = () => {
    const params = useParams();

    const [fetchData, setFetchData] = useState({});
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

    return (
        <>
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
                    <h1 className="text-capitalize">{fetchData.title}</h1>
                    <p className="text-capitalize">{fetchData.description}</p>
                </div>
                <div>
                    <span className="mr-5 text-danger fs-4">
                        <s>{fetchData.original_price}$</s>
                    </span>
                    <span className="fs-4">{fetchData.selling_price}$</span>
                </div>
                <div>
                    <span className="py-2 px-4 bg-success text-white mt-2 d-inline-block text-uppercase">
                        in stock
                    </span>
                </div>
                <div>
                    <button className="btn btn-danger mt-5">
                        Add to wishlist
                    </button>
                </div>
            </Col>
        </>
    );
};

export default SingleProduct;

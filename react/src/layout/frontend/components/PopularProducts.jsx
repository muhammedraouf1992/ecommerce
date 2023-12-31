import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { BsCartPlusFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useAuthContext } from "../../../context/AuthContext";

const PopularProducts = () => {
    const { getFetcher, loading } = useAuthContext();
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        fetch("https://touchy-misalignment.000webhostapp.com/api/product")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data);
                setFetchedData(data.data);
            });
    }, []);
    const filteredData = fetchedData.filter((product) => {
        return product.popular === 1;
    });
    return (
        <Container className="space" fluid="xl">
            <Row className="text-center mt-5">
                <h3 className="heading">Featured Products</h3>
                <p className="fs-5">Summer Collection New Modern Design</p>
            </Row>
            <Row>
                {filteredData.map((data) => (
                    <Col lg={3} key={data.id} className="my-2">
                        <div className="p-2 border product-card rounded-5">
                            <div className="product-card-image ">
                                <img
                                    src={`https://touchy-misalignment.000webhostapp.com/${data.image}`}
                                    alt=""
                                    className="rounded-5"
                                />
                            </div>
                            <div className="product-details px-3">
                                <p className="mt-2">{data.brand}</p>
                                <h4>{data.title}</h4>
                            </div>
                            <div className="product-icons px-3">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <div className="box px-3">
                                <p className="price mt-2">
                                    {data.selling_price}$
                                </p>
                                <div className="background">
                                    <BsCartPlusFill className="cart" />
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default PopularProducts;

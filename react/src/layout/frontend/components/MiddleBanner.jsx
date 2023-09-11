import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const MiddleBanner = () => {
    return (
        <div className="banner-bg d-flex justify-content-center align-items-center">
            <Container className="" fluid="xl">
                <Row>
                    <Col className="text-center my-3 text-white">
                        <div className="">
                            <h6 className="fs-4 fw-bold">Repair Services</h6>
                            <h3 className="fs-1 my-3 fw-bold">
                                Up To
                                <span className="text-danger"> 70% Off</span>
                                -All T-Shirts & Accessories
                            </h3>
                            <div>
                                <Button className="btn bg-white btn-lg text-capitalize text-black fw-bold button">
                                    explore more
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MiddleBanner;

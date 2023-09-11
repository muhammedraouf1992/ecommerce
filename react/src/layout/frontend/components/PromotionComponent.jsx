import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const PromotionComponent = () => {
    return (
        <Container className="space" fluid="xl">
            <Row>
                <Col lg={6}>
                    <div className="col-background_1 d-flex justify-content-start align-items-center px-4">
                        <div className="text-white">
                            <p>crazy deals</p>
                            <h4 className="fw-bold fs-2">Buy 1 Get 1 Free</h4>
                            <p>the best clasic dress is on sale at cora</p>
                            <Button
                                className="btn fw-bold"
                                variant="outline-light"
                                size="lg"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="col-background_2 d-flex justify-content-start align-items-center px-4">
                        <div className="text-white">
                            <p>spring/summer</p>
                            <h4 className="fw-bold fs-2">Upcomming Season</h4>
                            <p>the best clasic dress is on sale at cora</p>
                            <Button
                                className="btn fw-bold"
                                variant="outline-light"
                                size="lg"
                            >
                                Collections
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col lg={4}>
                    <div className="col-background_3 d-flex justify-content-start align-items-center px-4">
                        <div className="col-details">
                            <h4 className="fw-bold fs-2 text-white">
                                Upcomming Season
                            </h4>
                            <p className="fw-bold text-danger">
                                the best clasic dress is on sale at cora
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="col-background_4 d-flex justify-content-start align-items-center px-4">
                        <div className="col-details">
                            <h4 className="fw-bold fs-2 text-white ">
                                Upcomming Season
                            </h4>
                            <p className="fw-bold text-danger">
                                the best clasic dress is on sale at cora
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="col-background_5 d-flex justify-content-start align-items-center px-4">
                        <div className="col-details">
                            <h4 className="fw-bold fs-2 text-white">
                                Upcomming Season
                            </h4>
                            <p className="fw-bold text-danger">
                                the best clasic dress is on sale at cora
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PromotionComponent;

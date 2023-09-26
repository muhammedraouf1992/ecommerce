import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const AboutBanner = () => {
    return (
        <div className="about-banner d-flex justify-content-center align-items-center mb-5">
            <Container className="">
                <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h2 className="fs-1 text-white text-capitalize fw-bold">
                                #knowus
                            </h2>
                            <p className="fs-4 text-white text-capitalize">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutBanner;

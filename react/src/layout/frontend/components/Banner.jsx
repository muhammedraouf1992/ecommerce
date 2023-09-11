import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
const Banner = () => {
    return (
        <div className="banner d-flex align-items-center">
            <Container className="" fluid="xl">
                <Row>
                    <Col>
                        <h4>Trade-in-offer</h4>
                        <h1 className="fs-1 heading">
                            Super Value deals <br />
                            <span>On all products</span>
                        </h1>
                        <p>Save more with coupons & up to 70% off!</p>
                        <button className="primary_btn">Shop Now</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;

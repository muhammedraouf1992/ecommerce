import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Feature1 from "../../../assets/frontend/img/features/f1.png";
import Feature2 from "../../../assets/frontend/img/features/f2.png";
import Feature3 from "../../../assets/frontend/img/features/f3.png";
import Feature4 from "../../../assets/frontend/img/features/f4.png";
import Feature5 from "../../../assets/frontend/img/features/f5.png";
import Feature6 from "../../../assets/frontend/img/features/f6.png";

const AboutBoxes = () => {
    return (
        <Container className="my-5" fluid="xxl">
            <Row>
                <Col lg={2} className="">
                    <div className="feature-card p-3 card card1 ">
                        <div>
                            <img src={Feature1} alt="" width={"100%"} />
                            <p>happy sell</p>
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="feature-card p-3 card card2 ">
                        <div>
                            <img src={Feature2} alt="" width={"100%"} />
                            <p>Free Shipping</p>
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="feature-card p-3 card card3 ">
                        <div>
                            <img src={Feature3} alt="" width={"100%"} />
                            <p>Online order</p>
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="feature-card p-3 card card4 ">
                        <div>
                            <img src={Feature4} alt="" width={"100%"} />
                            <p>save money</p>
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="feature-card p-3 card card5 ">
                        <div>
                            <img src={Feature5} alt="" width={"100%"} />
                            <p>promotions</p>
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="feature-card p-3 card card6 ">
                        <div>
                            <img src={Feature6} alt="" width={"100%"} />
                            <p>f24/7 support</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutBoxes;

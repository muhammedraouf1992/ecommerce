import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import Pay1 from "../../../assets/frontend/img/pay/app.jpg";
import Pay2 from "../../../assets/frontend/img/pay/play.jpg";
import Pay3 from "../../../assets/frontend/img/pay/pay.png";
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="py-5 footer">
            <Container fluid="xxl">
                <Row>
                    <Col lg={6} className="text-white">
                        <h1>Ecommerce</h1>
                        <div>
                            <h6 className="fs-4 text-capitalize fw-bold">
                                contact
                            </h6>
                            <p className="fw-bold text-capitalize ">
                                address:
                                <span className="fw-light fs-6">
                                    562 Wellington Road,Street32,San Francisco
                                </span>
                            </p>
                            <p className="fw-bold text-capitalize ">
                                Phone:
                                <span className="fw-light fs-6">
                                    +01 32223 42423/(+91)0129 12412
                                </span>
                            </p>
                            <p className="fw-bold text-capitalize ">
                                working hours:
                                <span className="fw-light fs-6">
                                    10:00-18:00,Mon-Sat
                                </span>
                            </p>
                        </div>
                        <div>
                            <h6 className="fs-4 text-capitalize fw-bold">
                                follow us
                            </h6>
                            <div className="footer-icons">
                                <FaFacebookF />
                                <FaTwitter />
                                <AiFillGithub />
                                <AiFillLinkedin />
                                <AiFillInstagram />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col lg={6}>
                                <h6 className="fs-4 text-capitalize fw-bold text-white">
                                    About
                                </h6>
                                <ul className="footer-col1">
                                    <li>
                                        <Link to="/">home</Link>
                                    </li>
                                    <li>
                                        <Link to="/aboutus">about us</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/terms">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contactus">Contact Us</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={6}>
                                <h6 className="fs-4 text-capitalize fw-bold text-white">
                                    Install App
                                </h6>
                                <div>
                                    <p className="text-capitalize">
                                        from app store or google play
                                    </p>
                                    <div className="pictures">
                                        <img src={Pay1} alt="" />
                                        <img src={Pay2} alt="" />
                                    </div>
                                    <p className="text-capitalize">
                                        secured payment
                                    </p>
                                    <img src={Pay3} alt="" className="imgg" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className="text-capitalize text-center mt-4">
                            made by &copy; <span>Raouf {year}</span> Ecommerce
                            Website
                        </h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;

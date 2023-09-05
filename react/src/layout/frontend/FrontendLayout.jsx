import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import NavScrollExample from "./Navbar";
import { Outlet } from "react-router-dom";

const FrontendLayout = () => {
    return (
        <>
            <NavScrollExample />

            <Container>
                <Row>
                    <Col>{<Outlet />}</Col>
                </Row>
            </Container>
        </>
    );
};

export default FrontendLayout;

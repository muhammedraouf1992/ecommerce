import React, { useState } from "react";
import NavScrollExample from "../../../layout/frontend/Navbar";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosClient from "../../../axios";
import { useAuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const { setUser, setToken, user } = useAuthContext();
    const [loginInput, setLoginInput] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient
            .post("/login", loginInput)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <NavScrollExample />
            <Container>
                <Row>
                    <Col lg={8} md={8} sm={12}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={loginInput.email}
                                    name="email"
                                    onChange={handleChange}
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone
                                    else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={loginInput.password}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;

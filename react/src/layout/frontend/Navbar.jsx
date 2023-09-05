import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import axiosClient from "../../axios";

function NavScrollExample() {
    const { setUser, setToken, token, user } = useAuthContext();
    const navigate = useNavigate();
    const logout = () => {
        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
            navigate("/login");
        });
    };
    return (
        <Navbar expand="lg" className="bg-body-secondary">
            <Container className="fluid">
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="">
                    <Nav className="ml-auto align-items-center" navbarScroll>
                        <Link className="mx-2" to="/">
                            Home
                        </Link>
                        <Link className="mx-2" to="/aboutus">
                            About Us
                        </Link>
                        <Link className="mx-2" to="/contactus">
                            Contact Us
                        </Link>

                        {user.role_as ? (
                            <Link className="mx-2" to="/admin">
                                Admin
                            </Link>
                        ) : null}

                        {!token ? (
                            <>
                                <Link className="mx-2" to="/login">
                                    Login
                                </Link>
                                <Link className="mx-2" to="/register">
                                    Register
                                </Link>
                            </>
                        ) : (
                            <Button
                                className="ml-5"
                                variant="danger"
                                onClick={logout}
                            >
                                logout
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;

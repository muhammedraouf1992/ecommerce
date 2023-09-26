import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Img1 from "../../../assets/frontend/img/about/a6.jpg";
const AboutHero = () => {
    return (
        <Container>
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <div className="px-3">
                        <img src={Img1} alt="" />
                    </div>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <div>
                        <h1 className="subheading">who are we?</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Sit officiis iste laudantium repudiandae quam
                            architecto odit repellat dicta corporis suscipit,
                            inventore a tenetur sunt adipisci eligendi unde ea!
                            In, neque.
                        </p>
                        <abbr title="">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Vitae accusamus tempora blanditiis?
                        </abbr>
                        <marquee
                            className="mt-5"
                            behavior=""
                            direction=""
                            loop="-1"
                            bgcolor="black"
                            scrollamount="5"
                            width="100%"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Neque et labore delectus impedit earum
                            necessitatibus aliquid temporibus doloremque
                            corporis aperiam?
                        </marquee>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutHero;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import RoleTyping from "./RoleTyping";
import homePic from "../../Assets/home-image-2.jpeg";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Hi There!{" "}
                            <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                            </span>{" "}
                            I'M
                        </h1>

                        <h1 className="heading-name">
                            <strong className="main-name"> Shaun Soobagrah</strong>
                        </h1>

                        <div style={{ padding: 30 }} className="type">
                            <RoleTyping />
                        </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                        <img
                            src={homePic}
                            alt="home pic"
                            className="img-fluid"
                            style={{ paddingTop: 50, }}
                        />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
        
    );

}
export default Home;

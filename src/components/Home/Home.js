import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Home.css";
import RoleTyping from "./RoleTyping";
import homePic from "../../Assets/home-image-2.jpeg";
import githubIcon from "./boostrapIcon/github.svg";
import linkedinIcon from "./boostrapIcon/linkedin.svg";
import mailIcon from "./boostrapIcon/envelope-fill.svg";
import codingPerson from "../../Assets/codingPerson.json";
import DisplayLottie from "../Utils/DisplayLottie";
function Home() {
    return (
        <section>
            <Container fluid className="home-content " style={{backgroundColor:'RGB(114,104,84)'}}>
                <Row xs={12} style={{width:'100%'}}>
                    <Col md={8} className="home-header">
         
                            <p style={{marginBottom:'3rem'}} className="heading">
                                <strong>
                                Hi there!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                                </span>{" "}
                                I'm Shaun Soobagrah
                                </strong>
                            </p>
      
                            <div>
                                <p className="greating-text">
                                    I am a Software Developer with a passion for creating
                                    innovative solutions to complex problems. I am a
                                    self-motivated individual who is always eager to learn and
                                    improve my skills. I am a team player who is able to work
                                    effectively with others to achieve common goals. I am
                                    currently seeking a challenging and rewarding role in the
                                    IT industry.{" "}
                                </p>
                            </div>

                            <div className="d-flex align-items-center">
                                <Button className="greeting-button" >
                                    <Image src={githubIcon} className="image-button" />
                                </Button>
                                <Button className="greeting-button" >
                                    <Image src={linkedinIcon} className="image-button" />
                                </Button>
                                <Button className="greeting-button" >
                                    <Image src={mailIcon} className="image-button" />
                                </Button>
                                <Button className="greeting-button" >
                                    <strong>Resume</strong>
                                </Button>
                                <DisplayLottie animationData={codingPerson} width={300} height={300} />
                        </div>
                   
                    </Col>

                    <Col style={{ marginLeft:'200px' }}>
                        <img
                            src={homePic}
                            alt="home pic"
                            className="img-fluid rounded-circle"
                            style={{ paddingTop: 50, height:'auto'}}
                        />
                    </Col>
                </Row>


                {/* <Row className="justify-content-center" style={{ paddingBottom: 20, marginLeft:'40vw' }}>
                    <Col xs={12} md={12}>
                    <DisplayLottie animationData={codingPerson} width={500} height={500} />
                    </Col>
                </Row> */}
            </Container>
        </section>
    );
}

export default Home;

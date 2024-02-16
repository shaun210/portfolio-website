import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Home.css";
import homePic from "../../Assets/home-image-2.jpeg";
import githubIcon from "./boostrapIcon/github.svg";
import linkedinIcon from "./boostrapIcon/linkedin.svg";
import mailIcon from "./boostrapIcon/envelope-fill.svg";
import codingPerson from "../../Assets/codingPerson.json";
import DisplayLottie from "../Utils/DisplayLottie";


function Home() {
  return (
    <section>
      <Container fluid className="home-content" style={{ marginTop: '5rem', height: '95vh' }}>
        <Row className="justify-content-center align-items-center" style={{ width: '100%', height: '100%' }}>
          <Col xs={12} s={8} md={8} className="home-header">
            <p style={{ marginBottom: '3rem' }} className="heading">
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
                <Button className="greeting-button" onClick={() => window.open('https://github.com/shaun210', '_blank')}>
                    <Image src={githubIcon} className="image-button" />
                </Button>
                <Button className="greeting-button" onClick={() => window.open('https://www.linkedin.com/in/shaun-soobagrah/', '_blank')}>
                    <Image src={linkedinIcon} className="image-button" />
                </Button>
                <Button className="greeting-button" onClick={() => window.open('mailto:ssoobagrah@gmail.com')}>
                    <Image src={mailIcon} className="image-button" />
                </Button>
                <Button className="greeting-button" onClick={() => window.open('./resume.pdf', '_blank')}>
                    <strong>Resume</strong>
                </Button>

              <DisplayLottie animationData={codingPerson} width={300} height={300} />
            </div>
          </Col>

          <Col xs={12} s={4} md={4} className="d-flex justify-content-center">
            <img
              src={homePic}
              alt="home pic"
              className="img-fluid rounded-circle"
              style={{ paddingTop: 50, height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;

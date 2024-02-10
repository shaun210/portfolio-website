import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './project.css';
import {projectPage} from '../../portfolio';
import githubIcon from "./boostrapIcon/github.svg";
const ProjectList = () => {
  return (
    <Container fluid className='project-main' style={{ padding: '5rem' }}>
        <Row>   
        <h1 className="project-title">Personal Projects</h1>
        </Row>
        
        <Row>   
        <h3 className="project-subtitle">Java projects</h3>
        </Row>
        <Row xs={1} sm={2} md={3} className="g-4">
            {projectPage.javaProjects.map((project, index) => (
                <Col key={index}>
                    <Card className="project-card" style={{ height: '15rem' }}>
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                                <Card.Title as="h5"><strong>{project.title}</strong></Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Card.Text>
                                    {project.techStack}
                                </Card.Text>
                            </div>
                            <Link to= {project.link}>
                                <Button variant="primary">Learn more</Button>
                            </Link>
                            <img src={githubIcon} className="image-button" />
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
  );
};

export default ProjectList;

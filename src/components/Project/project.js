import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './project.css';
import {projectPage} from '../../portfolio';
const ProjectList = () => {
  return (
    <Container fluid className='project-main' style={{ padding: '5rem' }}>
        <Row>   
        <h1 className="project-title">Personal Projects</h1>
        </Row>
        
        <Row>   
        <h3 className="project-subtitle">Java projects</h3>
        <hr />
        </Row>
        {renderSection(projectPage.javaProjects)}

        <Row>   
        <h3 className="project-subtitle">Python project</h3>
        <hr />
        </Row>
        {renderSection(projectPage.pythonProjects)}
    </Container>
  );
};

const renderSection = (projectPage) => {
    return (
        <Row xs={1} sm={2} md={3} className="g-4">
            {projectPage.map((project, index) => (
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
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default ProjectList;

import React from 'react';
import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import universityLogo from './McGill University.svg';

const SkillsPage = () => {
  const skills = [
    { name: 'Java', category: 'Backend', rating: 8 },
    { name: 'React', category: 'Frontend', rating: 7 },
    { name: 'JavaScript', category: 'Frontend', rating: 8 },
    { name: 'HTML', category: 'Frontend', rating: 9 },
    { name: 'CSS', category: 'Frontend', rating: 8 },
    { name: 'Node.js', category: 'Backend', rating: 7 },
    { name: 'Python', category: 'Backend', rating: 6 },
    { name: 'Docker', category: 'Other Tools', rating: 7 },
    { name: 'AWS', category: 'Other Tools', rating: 6 },
    // Add more skills as needed
  ];

  const renderProgressBar = (rating) => {
    return <ProgressBar now={rating * 10} label={`${rating}/10`} />;
  };

  return (
    <Container style={{ padding: '5rem', textAlign: 'left' }}>
      <Row className="mt-5">
        <Col>
          <h1>Programming Skills</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Frontend</h3>
          {skills.filter(skill => skill.category === 'Frontend').map((skill, index) => (
            <div key={index}>
              <p>{skill.name}</p>
              {renderProgressBar(skill.rating)}
            </div>
          ))}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Backend</h3>
          {skills.filter(skill => skill.category === 'Backend').map((skill, index) => (
            <div key={index}>
              <p>{skill.name}</p>
              {renderProgressBar(skill.rating)}
            </div>
          ))}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Other Tools</h3>
          {skills.filter(skill => skill.category === 'Other Tools').map((skill, index) => (
            <div key={index}>
              <p>{skill.name}</p>
              {renderProgressBar(skill.rating)}
            </div>
          ))}
        </Col>
      </Row>
      {/* Education Section */}
      <Row className="mt-5">
        <Col>
          <h1>Education</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12} md={6}>
          <Image src={universityLogo} alt="University Logo" fluid />
        </Col>
        <Col xs={12} md={6}>
          <p><strong>CGPA:</strong> 3.8/4.0</p>
          <p><strong>Duration:</strong> August 2019 - May 2023</p>
          <p><strong>Achievements:</strong> Dean's List, Academic Excellence Award</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsPage;

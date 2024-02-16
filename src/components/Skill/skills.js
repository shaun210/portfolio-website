import React from 'react';
import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import universityLogo from './McGill University.svg';
import GitHubCalendar from 'react-github-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJs, faHtml5, faCss3, faPython, faPhp, faNodeJs, faDocker, faAws, faGit, faJira } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


const SkillsPage = () => {
  const skills = [
    { name: 'Java (Spring Boot)', icon: faJava, category: 'Backend' },
    { name: 'React JS', icon: faJs, category: 'Frontend' },
    { name: 'Vue JS', icon: faJs, category: 'Frontend' },
    { name: 'JavaScript', icon: faJs, category: 'Frontend' },
    { name: 'HTML', icon: faHtml5, category: 'Frontend' },
    { name: 'CSS', icon: faCss3, category: 'Frontend' },
    { name: 'Node.js', icon: faNodeJs, category: 'Backend' },
    { name: 'Python (Flask)', icon: faPython, category: 'Backend' },
    { name: 'PHP', icon: faPhp, category: 'Backend' },
    { name: 'PostgreSQL', icon: faDatabase, category: 'Backend' },
    { name: 'MySql', icon: faDatabase, category: 'Backend' },
    { name: 'Docker', icon: faDocker, category: 'Other Tools' },
    { name: 'AWS', icon: faAws, category: 'Other Tools' },
    { name: 'Git', icon: faGit, category: 'Other Tools' },
    { name: 'Jira', icon: faJira, category: 'Other Tools' },
    // Add more skills as needed
  ];


  const SkillSection = ({ title, skills }) => {
    const renderSkillRows = () => {
      const rows = [];
      const itemsPerRow = 4; // Adjust as needed based on the design and screen size
  
      for (let i = 0; i < skills.length; i += itemsPerRow) {
        const rowSkills = skills.slice(i, i + itemsPerRow);
  
        const rowItems = rowSkills.map((skill, index) => (
          <Col key={index} xs={12} sm={6} md={3}>
            <div className="skill-item">
              <FontAwesomeIcon icon={skill.icon} style={{ marginRight: '0.5rem', color: '#007bff', fontSize: '2rem' }} />
              <p>{skill.name}</p>
            </div>
          </Col>
        ));
  
        rows.push(
          <Row key={i} className="mt-3">
            {rowItems}
          </Row>
        );
      }
  
      return rows;
    };
  
    return (
      <div className="skill-section mt-4" style={{ backgroundColor: 'rgb(231, 223, 234)', borderRadius: '20px', padding: '15px' }}>
        <h3>{title}</h3>
        {renderSkillRows()}
      </div>
    );
  };
  
  

  return (
    <Container style={{ padding: '5rem', textAlign: 'left' }}>
      <Row className="mt-5">
    <Col>
      <h1>Programming Skills</h1>
    </Col>
  </Row>
  <SkillSection title="Frontend" skills={skills.filter(skill => skill.category === 'Frontend')} />
  <SkillSection title="Backend" skills={skills.filter(skill => skill.category === 'Backend')} />
  <SkillSection title="Other Tools" skills={skills.filter(skill => skill.category === 'Other Tools')} />

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

      <Row className="w-100 mt-4">
        <Col>
          <h1 style={{ marginBottom: '2rem' }}>GitHub Contribution Calendar</h1>
          <GitHubCalendar username="shaun210" colorScheme='light' style={{ width: '100%' }} />
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsPage;

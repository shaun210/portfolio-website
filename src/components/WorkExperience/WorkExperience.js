import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import experiencePic from './experience.svg';
import './WorkExperience.css';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer',
      techStack: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySql', 'React.js', 'WordPress', 'Bootstrap', 'Docker', 'GitHub'],
      company: 'Quebec Centre for Biodiversity Science',
      linkToCompanyWebsite: 'https://qcbs.ca/',
      duration: 'May 2023 - December 2023',
      tasks: ['Developed and maintained website features',
        'Developed annual report generation feature on website, using JS, PHP, and SQL queries, which resulted in a 80% reduction in manual effort',
        'Improved employee workflow by automating data input and display process, eliminating the need to save data in multiple locations',
        'Automated website component generation with PHP scripts, streamlining workflow and eliminating the need to manually create components on Wordpress',
        'Worked on the Frontend for this Biodiversity project in Collaboration with GEO BON: https://github.com/GEO-BON/bon-in-a-box-pipelines ',
      ],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      techStack: ['React.JS', 'Java Springboot', 'HTML', 'CSS', 'PostgreSQL', 'Docker', 'Jira', 'GitHub', 'Agile Methodology'],
      company: 'Stocate',
      linkToCompanyWebsite: 'https://www.stocate.com/',
      duration: 'January 2023 - April 2023',
      tasks: ['Implemented Deep Linking functionality, enabling seamless transition from the website to the mobile app',
        'Developed and integrated pagination feature, reducing webpage loading time by 70%',
        'Enhanced website functionality and user experience through the integration of new features',
        'Utilized Agile methodology and Jira to efficiently manage and deliver projects',
      ]
    }
  ];

  return (
    <Container style={{ padding: '5rem', textAlign: 'left' }}>
      <Row className="mt-3 d-flex align-items-end">
        <Col>
          <h1 style={{ fontSize: '52px' }}>Experiences</h1>
        </Col>
        <Col className="d-flex justify-content-center">
          <Image src={experiencePic} alt="experience" style={{ width: '15rem', height: 'auto', padding: '1rem' }} />
        </Col>
      </Row>

      {experiences.map((experience) => (
        <Card className="mb-4 p-3" key={experience.id}>
          <div className="experience-content" style={{ textAlign: 'left' }}>
            <h3>{experience.title}</h3>
            <p>{experience.duration}</p>
            <p>
              {experience.company} (<a href={experience.linkToCompanyWebsite} target="_blank" rel="noopener noreferrer">link</a>)
            </p>
            <div className="row row-cols-auto" style={{ marginBottom: '1rem' }}>
              {experience.techStack.map((technology, index) => (
                <div className="col" key={index}>
                  <div className="technology-box">{technology}</div>
                </div>
              ))}
            </div>
            <ul>
              {experience.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default WorkExperience;

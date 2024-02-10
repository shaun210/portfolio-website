import React from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { SingleProjectData } from '../../portfolio';
import './SingleProjectPage.css';
const SingleProjectPage = () => {
    const { projectId } = useParams();
    const project = SingleProjectData.find((project) => project.id === projectId);

    if (!project) {
        return <div>Project not found</div>;
    }
    return ( 
        <div className="single-project-main">
            <img src="intro_pic.png"/>
            <div className="single-project-submain">
                {project.details.map((section, index) => (
                    <div key={index}>
                    {renderSection(section)}
                    </div>
                ))}
            </div>
        </div>
      );
};
    
    const renderSection = (section) => {
      switch (section.type) {
        case 'title':
          return <h1 className="single-project-title">{section.content}</h1>;
        case 'subtitle':
          return <h2 className="single-project-subtitle">{section.content}</h2>;
        case 'paragraph':
          return <p className="single-project-paragraph">{section.content}</p>;
        case 'image':
            return <img src='/intro_pic.png' alt={section.alt} />;

        default:
          return null;
      }
};

export default SingleProjectPage;
import React from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { SingleProjectData } from '../../portfolio';
import './SingleProjectPage.css';
import dummy from './javaProjectsPictures/AWSproject/intro-pic.png';
const SingleProjectPage = () => {
    const { projectId } = useParams();
    const project = SingleProjectData.find((project) => project.id === projectId);

    if (!project) {
        return <div>Project not found</div>;
    }
    return ( 
        <div className="single-project-main">
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
          return <img className ="single-project-image "src={require(`${section.url}`)} alt={section.alt} />;
          case 'technologies':
            return (
              <div>
                <div className="row row-cols-auto" style={{marginBottom:'3rem'}}>
                  {section.content.map((technology, index) => (
                    <div className="col" key={index}>
                      <div className="technology-box">{technology}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          
        default:
          return null;
      }
};

export default SingleProjectPage;
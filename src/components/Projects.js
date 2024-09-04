import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Project.css';

function Projects() {
  return (
    <Container className="projects-container">
      <h1 className="text-center my-5">Projects</h1>
      <Row>
        <Col md={6} lg={4} className="mb-4">
          <Card className="project-card">
            <Card.Img variant="top" src="https://scontent.fdvo1-2.fna.fbcdn.net/v/t39.30808-6/454649215_2209267156097556_5762015868265301295_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHZCcHPIFDB0N82b7Nlp8c-6lJxhfV3uiLqUnGF9Xe6IuN35_o-q8YIptn0idkDkTf7J9M9HbCDFHjN1QGHuL13&_nc_ohc=eucdtASDUq0Q7kNvgFxO_cb&_nc_ht=scontent.fdvo1-2.fna&oh=00_AYCueiw_h9w5uObkzK64DZm42zpOklrhJ2iyi6OkCnRQRg&oe=66BD6984" alt="Project 1 Image" />
            <Card.Body>
              <Card.Title>My ePortfolio</Card.Title>
              <Card.Text>
                This eportfolio contains my informations and skills
              </Card.Text>
  
              <Button variant="info" href="https://policarm0411.wixsite.com/myfinal-eportfolio" target="_blank" rel="noopener noreferrer">
                Full Portfolio
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card className="project-card">
            <Card.Img variant="top" src="https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/454937988_2209599412730997_2368077079351185808_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF-H0xN3peyt3KkWoTI2hHgIgwkbDrpsEIiDCRsOumwQiktutXVHGylbXKH02V9nqnvRnQ9NbGnNvpWaAiSyGiK&_nc_ohc=qE4Rm40HzU0Q7kNvgHVwVIK&_nc_ht=scontent.fdvo1-1.fna&oh=00_AYAeuiFzHU1-qmeNg4cUAoA85xR-6iVaeOv6VFaOkikoDw&oe=66BDF38E" alt="Project 2 Image" />
            <Card.Body>
              <Card.Title>Project Title 2</Card.Title>
              <Card.Text>
                A brief description of the project, including its purpose and the technologies used.
              </Card.Text>
              <Button variant="primary" href="https://github.com/jonbarron/website.git" target="_blank" rel="noopener noreferrer" className="mb-2">
                View on GitHub
              </Button>
              <Button variant="secondary" href="https://project-live-demo2.com" target="_blank" rel="noopener noreferrer" className="mb-2">
                Live Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card className="project-card">
            <Card.Img variant="top" src="path-to-project-image3.jpg" alt="Project 3 Image" />
            <Card.Body>
              <Card.Title>Project Title 3</Card.Title>
              <Card.Text>
                A brief description of the project, including its purpose and the technologies used.
              </Card.Text>
        
              <Button variant="primary" href="https://github.com/yourusername/project-repo3" target="_blank" rel="noopener noreferrer" className="mb-2">
                View on GitHub
              </Button>
              <Button variant="secondary" href="https://project-live-demo3.com" target="_blank" rel="noopener noreferrer" className="mb-2">
                Live Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;

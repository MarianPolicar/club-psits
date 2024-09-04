import React from 'react';
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <Container className="about-container">
      <Card className="about-card shadow-lg">
        <Card.Body>
          <Card.Title className="about-card-title">About PSITS</Card.Title>
          <Card.Text className="about-card-text">
            The Philippine Society of Information Technology Students (PSITS) is a student-led organization that unites IT students across various universities. Our mission is to foster a collaborative learning environment that encourages the sharing of knowledge, skills, and experiences among aspiring IT professionals.
          </Card.Text>
          <Card.Text className="about-card-text">
            At PSITS, we are committed to enhancing the professional growth of our members through workshops, seminars, and community-building activities. Our goal is to prepare students for the challenges of the tech industry by providing opportunities for hands-on experience and networking.
          </Card.Text>

          {/* Enhanced Video Section */}
          <Row className="video-section">
            <Col>
              <h2 className="section-title">Watch Our Introduction Video</h2>
              <div className="video-container">
                <iframe
                  className="about-video"
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FuiJ613Cmxq%2F&show_text=false&width=500"
                  width="100%"
                  height="400"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </Col>
          </Row>

          {/* Other Content Sections with Enhanced Styling */}
          <Row className="info-section">
            <Col>
              <h2 className="section-title">Mission</h2>
              <p className="section-text">
                To provide a platform for IT students to learn, innovate, and collaborate, thereby fostering the development of competent and ethical IT professionals.
              </p>
            </Col>
          </Row>

          <Row className="info-section">
            <Col>
              <h2 className="section-title">Vision</h2>
              <p className="section-text">
                To be the leading organization that shapes future IT professionals by equipping them with essential skills and knowledge to thrive in a fast-evolving digital world.
              </p>
            </Col>
          </Row>

          <Row className="info-section">
            <Col>
              <h2 className="section-title">Objectives</h2>
              <ListGroup className="objectives-list">
                <ListGroup.Item>Promote collaboration and knowledge-sharing among IT students.</ListGroup.Item>
                <ListGroup.Item>Organize events, workshops, and seminars to enhance technical skills.</ListGroup.Item>
                <ListGroup.Item>Build a network of future IT professionals and industry leaders.</ListGroup.Item>
                <ListGroup.Item>Encourage ethical practices and professional growth.</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <Row className="info-section">
            <Col>
              <h2 className="section-title">Activities</h2>
              <p className="section-text">PSITS organizes a variety of events such as coding bootcamps, hackathons, tech talks, and career fairs to provide members with practical experience and industry insights.</p>
            </Col>
          </Row>

          <Row className="info-section">
            <Col>
              <h2 className="section-title">Membership</h2>
              <p className="section-text">Interested in joining PSITS? Membership is open to all IT students. Become a part of a community that supports growth, innovation, and collaboration.</p>
            </Col>
          </Row>

          <Row className="info-section">
            <Col>
              <h2 className="section-title">Contact Us</h2>
              <p className="section-text">Facebook: ndkc-psits</p>
              <p className="section-text">Follow us on social media for the latest updates and events!</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;

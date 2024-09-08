import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaUsers, FaCalendarAlt, FaHandsHelping } from 'react-icons/fa';
import './Home.css'; 
import Chatbot from './Chatbot'; // Importing the Chatbot component

function Home() {
  return (
    <Container fluid className="home-container">
      {/* Hero Section */}
      <Row className="hero-section d-flex align-items-center text-center">
        <div className="hero-overlay">
          <div className="hero-text mx-auto">
            <h1 className="display-4 hero-title">Welcome to PSITS</h1>
            <p className="lead hero-subtitle">
              The Philippine Society of Information Technology Students (PSITS) at the Notre Dame of Kidapawan College fosters a collaborative environment where IT students can learn, grow, and make a significant impact. Join us in shaping the future of technology!
            </p>
            <Button variant="primary" size="lg" href="http://localhost:3000/contact" className="hero-button">
              Get in Touch
            </Button>
          </div>
        </div>
      </Row>

      {/* Features Section */}
      <Row className="features-section text-center py-5">
        <Col md={4} className="feature-card mb-4">
          <FaUsers size={50} className="mb-3 feature-icon text-primary" />
          <h2 className="feature-title">Community Building</h2>
          <p className="feature-text">
            Join a vibrant community of IT enthusiasts where collaboration and teamwork are the foundation of our success.
          </p>
        </Col>
        <Col md={4} className="feature-card mb-4">
          <FaCalendarAlt size={50} className="mb-3 feature-icon text-success" />
          <h2 className="feature-title">Events & Workshops</h2>
          <p className="feature-text">
            Attend events, workshops, and hackathons that enhance your skills and provide hands-on learning experiences.
          </p>
        </Col>
        <Col md={4} className="feature-card mb-4">
          <FaHandsHelping size={50} className="mb-3 feature-icon text-warning" />
          <h2 className="feature-title">Professional Growth</h2>
          <p className="feature-text">
            Develop professionally through mentorship, networking, and exposure to industry experts and technologies.
          </p>
        </Col>
      </Row>

      {/* Testimonials Section */}
      <Row className="testimonials-section bg-light py-5 text-center">
        <Col md={12}>
          <h2 className="section-title">What Our Members Say</h2>
          <p className="mt-3 testimonials-text">
            "Being a part of PSITS has significantly shaped my understanding and passion for technology. The events and workshops are top-notch, and the community is incredibly supportive!" — <strong>Marian Grace M. Policar, IT Student</strong>
          </p>
        </Col>
      </Row>

      {/* Call to Action Section */}
      <Row className="cta-section d-flex align-items-center text-center py-5">
        <Col md={12}>
          <h2 className="cta-title mb-4">Ready to Join PSITS?</h2>
          <Button variant="success" size="lg" href="https://ndkc.edu.ph/" className="cta-button">
            Sign Up Now
          </Button>
        </Col>
      </Row>

      {/* Add Chatbot at the bottom */}
      <Row className="chatbot-section mt-5">
        <Col md={12}>
          <Chatbot /> {/* The Chatbot component */}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

import React, { useRef } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g3x763o', 'template_xnqgfgb', form.current, 'slXhco6vfstPrbzsH')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.error('Error:', error.text);
          alert('Failed to send message.');
      });
  };

  return (
    <Container className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <Form ref={form} onSubmit={sendEmail} className="contact-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="contact-form-label">Email Address</Form.Label>
          <Form.Control type="email" name="user_email" placeholder="Enter your email" className="contact-form-control" required />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label className="contact-form-label">Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={4} placeholder="Enter your message" className="contact-form-control" required />
        </Form.Group>

        <Button variant="primary" type="submit" className="contact-button">
          Send Message
        </Button>
      </Form>

      {/* Contact Information */}
      <div className="contact-info">
        <h4>Contact Information:</h4>
        <p><FaPhone /> +639162019871</p>
        <p><FaMapMarkerAlt /> Datu Ingkal Street, Kidapawan City</p>
      </div>

      {/* FAQs Section */}
      <div className="contact-faq">
        <h4>Frequently Asked Questions</h4>
        <ul>
          <li><strong>How long will it take to get a reply?</strong> We usually respond within 24 hours.</li>
          <li><strong>Can I visit your office?</strong> Yes, we're open Monday to Friday, 9 AM to 5 PM.</li>
          <li><strong>Do you offer phone support?</strong> Yes, you can reach us at +63916201987 during office hours.</li>
        </ul>
      </div>

      <div className="contact-social">
        <h4>Connect with Us:</h4>
        <Row className="social-icons">
          <Col>
            <a href="https://www.facebook.com/ndkcpsits?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
          </Col>
          <Col>
            <a href="https://www.instagram.com/abutsekikhahaha?fbclid=IwY2xjawFEFitleHRuA2FlbQIxMAABHT9CqCUEuEtb9NJ9mnCOvDXAGOTC8ENeznhVf3w1y8meP5AuWC1722ZbyQ_aem_AcMMtVyAqddA1Oqr5SaDOw" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Contact;

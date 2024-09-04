import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Events.css';

const eventsData = [
  {
    id: 1,
    title: '11th PSITS Regional Convention',
    date: 'April 28-29, 2023',
    location: ' KCC Convention Center, General Santos City',
    description: '11th PSITS Regional Convention with the Theme: "Innovative Technologies: Navigating the Future Through Convergence." ',
    image: 'https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/344572013_2266409546893663_3700529104002531482_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFACBCfYxCy4wYXkO7t_i9WoV7jnDbOp6WhXuOcNs6npT-mJ8UgNFC7bG5cCSiHB8NR2YTAp7B5OWG6Wox07P7E&_nc_ohc=ATUPFTqw0hYQ7kNvgGVmo8y&_nc_zt=23&_nc_ht=scontent.fdvo2-2.fna&oh=00_AYCgsXu_uvjHLD8de4Fajex8Uc1TbYZnNBDT_uazqpwUXA&oe=66DCDDC7',
  },
  {
    id: 2,
    title: 'Innotechsphere Workshop',
    date: 'November 17, 2023',
    location: 'Notre Dame of Kidapawan College, Student Center',
    description: 'Ignite the future at "InnoTechSphere 2023" – NDKC PSITS Seminar and Workshop!',
    image: 'https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/403869563_311106121741184_2317717748718533306_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFXk_GTz2jXQ0bnqvVPyvW4y3aQEub--EXLdpAS5v74RVgQ6mmQo64-uUp3OUV6x06zhgNC8mZwP8Rtmgn-QmqP&_nc_ohc=pB5kX2c1-DUQ7kNvgGVIjR4&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&oh=00_AYA4BhTfEjMsYUz7Onn1wFnmoFritETU2Np1U51pm41efA&oe=66DCFF13',
  },

  {
    id: 3,
    title: '12th PSITS Regional Convention',
    date: 'May 4-6, 2024',
    location: 'RMMC MI - Ramon Magsaysay Memorial Colleges-Marbel, Inc.',
    description: '"Philippine Society of Information Technology Students" Regional Convention, themed “Innotech Gala: Elevating the Spirit of Innovation in a Symphony of IT Brilliance.',
    image: 'https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/439973411_496477529374671_8843181174375944202_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH7J6RfR-VX6EiIp3GDKs6hS5RQGtMR2R1LlFAa0xHZHUpoawTRZC1cZgEtC3UnpLkbxy2n8l5BqOoy9ywn4ye2&_nc_ohc=n94D292fhicQ7kNvgH29iae&_nc_zt=23&_nc_ht=scontent.fdvo2-2.fna&oh=00_AYBXTptDXvlJhLOeYWmWGWGlAiBUjD5LjuDj9M5y2rqyYw&oe=66DCE5D6',
  },
];

const slideshowImages = [
  'https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/439973411_496477529374671_8843181174375944202_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH7J6RfR-VX6EiIp3GDKs6hS5RQGtMR2R1LlFAa0xHZHUpoawTRZC1cZgEtC3UnpLkbxy2n8l5BqOoy9ywn4ye2&_nc_ohc=n94D292fhicQ7kNvgH29iae&_nc_zt=23&_nc_ht=scontent.fdvo2-2.fna&oh=00_AYBXTptDXvlJhLOeYWmWGWGlAiBUjD5LjuDj9M5y2rqyYw&oe=66DCE5D6', 'https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/440155202_410371838481278_4309286310993739521_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHAYfl4mo7D07w0lGpuEp0pR5RZJvjQhkRHlFkm-NCGRK3mUFszPAdTm7ngBRUXE1rricTecLbKCK2GYB5PTyY_&_nc_ohc=iaqaq2xlNhAQ7kNvgGKBdI8&_nc_zt=23&_nc_ht=scontent.fdvo2-2.fna&oh=00_AYB0gNNubQvWNxTenVLWdxljF_zt3jGYzwvQ5phJ4BJgyw&oe=66DD0A01','https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/440172626_410372605147868_8967190378250377160_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG9I90QzrRadEFqwMUAJXntzyoGncT_dhLPKgadxP92Ers1BNlPy3OrN9MPKfhkZkT4cQozqnnqwB9HQ5VAWfoI&_nc_ohc=G2eiUSIcSKcQ7kNvgF3skoa&_nc_zt=23&_nc_ht=scontent.fdvo2-2.fna&oh=00_AYAjQSbJGREFYjkyd5UNBlYvpAO2JVWLgS7Z9GNwHnLvfA&oe=66DCE971','https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/403869563_311106121741184_2317717748718533306_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFXk_GTz2jXQ0bnqvVPyvW4y3aQEub--EXLdpAS5v74RVgQ6mmQo64-uUp3OUV6x06zhgNC8mZwP8Rtmgn-QmqP&_nc_ohc=pB5kX2c1-DUQ7kNvgGVIjR4&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&oh=00_AYA4BhTfEjMsYUz7Onn1wFnmoFritETU2Np1U51pm41efA&oe=66DCFF13'
];

function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideshowImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container className="events-container">
      <h2 className="events-title">Events</h2>

      {/* Slideshow Section */}
      <div className="slideshow-container">
        <img
          src={slideshowImages[currentIndex]}
          alt="Event Slide"
          className="slideshow-image"
        />
        <button className="prev-button" onClick={handlePrev}>
          &#10094; {/* Unicode for left arrow */}
        </button>
        <button className="next-button" onClick={handleNext}>
          &#10095; {/* Unicode for right arrow */}
        </button>
      </div>

      {/* Events Section */}
      <Row className="mt-4">
        {eventsData.map((event) => (
          <Col md={4} key={event.id} className="mb-4">
            <Card className="event-card">
              <div className="card-img-wrapper">
                <Card.Img variant="top" src={event.image} className="event-image" />
                <div className="event-date-badge">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </div>
              <Card.Body>
                <Card.Title className="event-title">{event.title}</Card.Title>
                <Card.Text className="event-details">
                  <span className="event-date">
                    <strong>Date:</strong> {event.date}
                  </span>
                  <br />
                  <span className="event-location">
                    <strong>Location:</strong> {event.location}
                  </span>
                </Card.Text>
                <Card.Text className="event-description">{event.description}</Card.Text>
          
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Events;

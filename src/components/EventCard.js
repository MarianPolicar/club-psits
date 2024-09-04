// EventCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function EventCard({ title, date, description, imageUrl, link }) {
  return (
    <Card className="event-card mb-4">
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        {link && (
          <Button variant="primary" href={link} target="_blank">
            Learn More
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default EventCard;

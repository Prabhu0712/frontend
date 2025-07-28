import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container className="my-5">
      <Card className="text-center">
        <Card.Body>
          <Card.Title as="h1">Welcome to the Image Gallery</Card.Title>
          <Card.Text>
            This is the application where you can search for beautiful images
            from Unsplash. Start by entering a keyword in the search bar above.
          </Card.Text>
          <Button variant="primary" href="https://unsplash.com" target="_blank">
            Learn more
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Welcome;

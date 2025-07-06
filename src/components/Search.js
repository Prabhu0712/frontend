import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = () => {
  return (
    <Container>
      <Row>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Seach for new image..." />
            </Col>
            <Col>
              <Button variant="primary" type="submit">Search</Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default Search;

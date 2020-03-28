import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
class Recipes extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" className="my-3">
            <h1>Your Recipes</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150/09f/fff.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Make this</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Recipes);

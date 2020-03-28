import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

function Login(props) {
  const state = {
    email: "",
    password: ""
  };

  const handleSubmit = () => {
    console.log(state.email, state.password);
    const { history } = props;
    history.push("/recipes");
  };

  const onChangeInput = e => {
    const { name, value } = e.target;
    this.state({ [name]: value });
  };

  return (
    <Row className="align-items-center justify-content-center login-container">
      <Col md="4" sm="12">
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={3}>
                  Email
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={onChangeInput}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={3}>
                  Password
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={onChangeInput}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="button" onClick={handleSubmit}>
                    Sign in
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default withRouter(Login);

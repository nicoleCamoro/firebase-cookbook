import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

class NewRecipe extends Component {
  state = {
    recipeName: "",
    cookTime: "",
    prepTime: "",
    Ingredients: {
      measurement: "",
      ingredient: ""
    },
    recipeImage: ""
  };
  render() {
    const onChangeInput = e => {
      const { name, value } = e.target;
    };

    return (
      <Container>
        <Row className="my-3">
          <h1>Create New Recipe</h1>
        </Row>
        <Row>
          <Col sm={12}>
            <Form>
              <Form.Group>
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control
                  type="text"
                  name="recipeName"
                  onChange={onChangeInput}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Recipe Image</Form.Label>
                <Form.Control
                  type="file"
                  name="recipeImage"
                  onChange={onChangeInput}
                />
              </Form.Group>

              <h3>Time</h3>
              <Form.Group>
                <Form.Label>Cooking time</Form.Label>
                <Form.Control
                  type="text"
                  name="cookTime"
                  onChange={onChangeInput}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Prep time</Form.Label>
                <Form.Control
                  type="text"
                  name="prepTime"
                  onChange={onChangeInput}
                />
              </Form.Group>

              {/* <Form.Group>
                <Form.Label>Total time</Form.Label>
                <Form.Control type="text" />
              </Form.Group> */}

              <h3>Ingredients</h3>
              <Row>
                <Col xs={4}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Measurement"
                      name="ingredients.measurement[0]"
                      onChange={onChangeInput}
                    />
                  </Form.Group>
                </Col>
                <Col xs={8}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Ingredient"
                      name="ingredients.ingredient[0]"
                      onChange={onChangeInput}
                    />
                  </Form.Group>
                </Col>
                <Button>Add ingredient</Button>
              </Row>

              <h3>Directions</h3>
              <Row>
                <Col sm="12">
                  <Form.Group>
                    <Form.Control
                      type="textarea"
                      name="recipeName"
                      onChange={onChangeInput}
                    />
                  </Form.Group>
                </Col>
                <Button>Add Direction</Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(NewRecipe);

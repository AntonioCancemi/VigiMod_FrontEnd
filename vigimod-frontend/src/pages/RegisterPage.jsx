import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    roles: [],
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        "http://localhost:8082/api/auth/signup",
        {
          input: user,
        }
      );
      console.log(response.data);
      setSuccess(true);
      setUser("");
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return (
    <Container>
      <Row className=" aling-items-center">
        <Col xs={4}></Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Registrazione</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="lastname">
                  <Form.Label>Cognome</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    value={user.lastname}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Registrati
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;

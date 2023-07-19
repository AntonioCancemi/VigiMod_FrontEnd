import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Col, Row } from "react-bootstrap";
import { AuthContext } from "../auth/AuthProvider";
import { loginPostDTO } from "../axios/service/authService";

const LoginPage = () => {
  const { login, authData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    loginPostDTO(credentials)
      .then((response) => response.data)
      .then((data) => login(data))
      .then(() => navigate("/home"))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center"
    >
      <Row className="justify-content-center">
        <Col lg={authData ? "auto" : 12} className="align-items-center">
          <Col lg={"auto"} className="vh-100 align-items-center">
            <Card className="p-4 shadow">
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center mt-3">
                    <Button variant="primary" type="submit">
                      Accedi
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

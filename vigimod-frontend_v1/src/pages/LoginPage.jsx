import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../auth/AuthProvider";

const LoginPage = () => {
  const { login, authData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(JSON.stringify(credentials));
    try {
      const response = await axios.post(
        "http://localhost:8082/api/auth/signin",
        credentials
      );
      const data = response.data;
      console.log(data);
      setCredentials({
        username: "",
        password: "",
      });
      if (data) {
        login(data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (authData) {
      navigate("/home");
    }
  }, [authData]);
  return (
    <Col lg={"auto"}>
      <Container
        className="d-flex align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Row className=" justify-content-center ">
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
        </Row>
      </Container>
    </Col>
  );
};

export default LoginPage;

import React, { useContext, useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { registerPostDTO } from "../axios/service/authService";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate } from "react-router";
const RegisterPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(false);
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    roles: ["MODERATOR"],
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    registerPostDTO(user)
      .then((response) => {
        console.log(response.status);
        setData(response.data);
      })
      .then(() => navigate("/"))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <Row className=" aling-items-center">
        <Col xs={4}></Col>
        <Col>
          <Card>
            <Card.Body>
              {data ? (
                <Card.Title>{data}</Card.Title>
              ) : (
                <>
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
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;

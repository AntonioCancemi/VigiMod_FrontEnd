import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Card, Container } from 'react-bootstrap';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulazione di chiamata API al backend per il login
    // Sostituisci questo codice con la tua logica effettiva di login
    console.log(credentials);
    // Reindirizza l'utente alla pagina successiva dopo il login
  };

  return (
     <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
   <Card className="p-4 shadow">
    <Card.Title className="text-center mb-4">Registrazione</Card.Title>
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
          <Button variant="primary" type="submit">
            Accedi
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </Container>
  );
};

export default LoginPage;

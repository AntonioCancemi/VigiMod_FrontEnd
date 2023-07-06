import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Card, Button } from 'react-bootstrap';

const MyComponent = () => {
  const { token, login, logout } = useContext(AuthContext);

  const handleLogin = () => {
    // Simulazione di ricezione del token JWT dal backend
    const newToken = '...'; // Inserisci qui il token ricevuto

    // Effettua il login
    login(newToken);
  };

  const handleLogout = () => {
    // Effettua il logout
    logout();
  };

  return (
    <Card>
      <Card.Body>
        {token ? (
          <>
            <Card.Title>Benvenuto!</Card.Title>
            <Card.Text>
              Sei autenticato con successo utilizzando il token JWT.
            </Card.Text>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Card.Title>Login</Card.Title>
            <Card.Text>
              Per effettuare il login, premi il pulsante di seguito.
            </Card.Text>
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default MyComponent;

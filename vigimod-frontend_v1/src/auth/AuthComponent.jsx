import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const navigate = useNavigate();
  const { authData, login, logout } = useContext(AuthContext);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Card>
      <Card.Body>
        {authData ? (
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

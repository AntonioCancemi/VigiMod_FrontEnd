import React from "react";
import { Card } from "react-bootstrap";

const Seller = ({ seller }) => {
  const { username, fullName, email } = seller;

  return (
    <Card>
      <Card.Body>
        <Card.Title>Seller Info</Card.Title>
        <Card.Text>Username: {username}</Card.Text>
        <Card.Text>Full Name: {fullName}</Card.Text>
        <Card.Text>Email: {email}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Seller;

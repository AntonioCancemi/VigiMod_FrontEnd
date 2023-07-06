import React from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Col lg={10}>
      <Row className="d=flex justify-content-center">
        <Card className="w-50 mt-5">
          <Card.Body>
            <h1>Oops!</h1>
            <p>Sembra che tu sia arrivato in un posto sconosciuto.</p>
            <p>
              Ma non preoccuparti, ecco un gattino per darti un po' di conforto!
            </p>
          </Card.Body>
          <Link to={"/home"}>
            <CardImg src="https://placekitten.com/200/200" alt="Gattino" />
          </Link>
          <Card.Footer className="text-center">Cliccami</Card.Footer>
        </Card>
      </Row>
    </Col>
  );
};

export default NotFound;

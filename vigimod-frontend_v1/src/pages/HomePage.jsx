import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AuthContext } from "../auth/AuthProvider";

function HomePage() {
  const { authData } = useContext(AuthContext);
  return (
    <Col lg={10} className="mt-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col className=" fs-1 fw-bold">WELCOME {authData?.username}</Col>
        </Row>
      </Container>
    </Col>
  );
}

export default HomePage;

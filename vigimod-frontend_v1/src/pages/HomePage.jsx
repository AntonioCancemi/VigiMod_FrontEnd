import { Col, Container, Row } from "react-bootstrap";

function HomePage() {
  return (
    <Col lg={10} className="mt-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="text-center">WELCOME IN VIGIMOD</Col>
        </Row>
      </Container>
    </Col>
  );
}

export default HomePage;

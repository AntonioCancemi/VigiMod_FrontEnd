import { Col, Container, Row } from "react-bootstrap";
import AdList from "../components/AdList";

const AdPage = () => {
  return (
    <Col lg={"10"}>
      <Container fluid>
        <Row>
          <Col lg={"auto"} className="px-0 align-self-start sticky-top"></Col>
          <Col className="mx-3 mt-5">
            <AdList ads={null} show={true} />
          </Col>
        </Row>
      </Container>
    </Col>
  );
};
export default AdPage;

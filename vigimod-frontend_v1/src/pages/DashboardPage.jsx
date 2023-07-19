import { Col, Container, Row } from "react-bootstrap";
import AdDashboard from "../components/AdDashborad";

export default function DashboardPage() {
  return (
    <Col lg={"10"} className="p-0 main-col">
      <Container fluid className="ad-dashboard-container">
        <Row>
          <Col className="mx-3 mt-5 ps-5">
            <AdDashboard />
          </Col>
        </Row>
      </Container>
    </Col>
  );
}

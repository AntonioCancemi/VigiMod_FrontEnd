import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdDashboard from "../components/AdDashborad";

const Homepage = () => {
  return (
    <Col lg={"10"}>
      <Container fluid>
        <Row>
          {/* <MyComponent></MyComponent> */}
          <Col lg={"auto"} className="px-0 align-self-start sticky-top"></Col>
          <Col className="mx-3 mt-5">
            <br />
            <AdDashboard />
            {/* {ads?.map((ad) => (
              <Ad key={ad.id} ad={ad} />
            ))} */}
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default Homepage;

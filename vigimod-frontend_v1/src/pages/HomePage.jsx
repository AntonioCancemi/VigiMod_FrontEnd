import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import AdDashboard from "../components/AdDashborad";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const { authData } = useContext(AuthContext);
  useEffect(() => {
    if (!authData) {
      navigate("/login");
    }
  });
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

import React, { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { BiSpreadsheet } from "react-icons/bi";
import { RiVipDiamondLine } from "react-icons/ri";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
  return (
    <Col lg={"auto"} className="px-0 align-self-start sticky-top">
      <Container className="sidebar   fs-4 bg-secondary d-flex justify-content-between flex-column ">
        {/* TbLayoutSidebarLeftExpand; */}

        <div>
          <br />
          <br />
          <Row>
            <Col xs={"auto"} className="text-start">
              <div variant="dark" onClick={toggleSidebar}>
                {expanded ? (
                  <TbLayoutSidebarLeftExpand />
                ) : (
                  <TbLayoutSidebarRightExpand />
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={"auto"}>
              <Link to={"/search"}>
                <BsSearch />
                {expanded ? " SEARCH" : ""}
              </Link>
            </Col>
          </Row>
          <Row>
            <Col xs={"auto"}>
              <Link to={"/home"}>
                <BiSpreadsheet />
                {expanded ? " ADS" : ""}
              </Link>
            </Col>
          </Row>
          <Row>
            <Col xs={"auto"}>
              <Link to={"/pro"}>
                <RiVipDiamondLine />
                {expanded ? " PRO" : ""}
              </Link>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col xs={"auto"}>
              <RiVipDiamondLine />
              {expanded ? " PRO" : ""}
            </Col>
          </Row>
        </div>
      </Container>
    </Col>
  );
};

export default Sidebar;

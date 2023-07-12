import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row, Form, Badge } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { BiSpreadsheet } from "react-icons/bi";
import { RiVipDiamondLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { getAdsCount } from "../axios/service/adService";
import { AuthContext } from "../auth/AuthProvider";
const Sidebar = () => {
  const [adsCount, setAdCount] = useState();
  const { authData, config } = useContext(AuthContext);

  useEffect(() => {
    {
      authData
        ? setInterval(
            10000,
            getAdsCount(config).then((response) => setAdCount(response.data))
          )
        : console.log("noAuth");
    }
  }, [authData]);
  return (
    <>
      <Col lg={2} className="px-0 align-self-start sticky-top">
        <Container className="sidebar   fs-4 bg-secondary d-flex justify-content-between flex-column ">
          <div>
            <br />
            <br />
            <Row>
              <Col xs={"auto"}>
                <div>
                  <BsSearch />
                  <SearchBar />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={"auto"}>
                <Link to={"/home"}>
                  <BiSpreadsheet />
                  ADS{" "}
                  <Badge pill bg="danger">
                    {adsCount}
                  </Badge>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col xs={"auto"}>
                <Link to={"/pro"}>
                  <RiVipDiamondLine />
                  PRO
                </Link>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col xs={"auto"}>
                <RiVipDiamondLine />
                PRO
              </Col>
            </Row>
          </div>
        </Container>
      </Col>
    </>
  );
};

export default Sidebar;

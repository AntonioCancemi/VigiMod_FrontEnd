import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Badge } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { BiSpreadsheet } from "react-icons/bi";
import { RiVipDiamondLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { AuthContext } from "../auth/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdsCount } from "../redux/actions/ad.GetDashboard";
const Sidebar = () => {
  const adsCount = useSelector((state) => state.content.adsCount);
  const pendingAds = useSelector((state) => state.content.pendingAds);
  const { authData, config } = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    authData
      ? setInterval(dispatch(fetchAdsCount(config)), 5000)
      : navigate("/login");
  }, [authData, pendingAds]);
  return (
    <>
      {authData ? (
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
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;

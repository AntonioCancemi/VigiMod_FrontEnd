import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Badge } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { BiSolidUserAccount, BiSpreadsheet } from "react-icons/bi";
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
  const year = new Date().getFullYear(); // Ottieni l'anno corrente
  useEffect(() => {
    authData
      ? setInterval(dispatch(fetchAdsCount(config)), 5000)
      : console.log("");
  }, [authData, pendingAds]);
  return (
    <>
      {authData ? (
        <Col lg={2} className="px-0 align-self-start sticky-top">
          <Container className="sidebar   fs-3  d-flex justify-content-between flex-column ">
            <div>
              <br />
              <Row className=" text-center">
                <Link className="fs-1 link-s text-decoration-none">
                  VIGIMOD
                </Link>
              </Row>
              <br />
              <Row>
                <Col>
                  <div>
                    <SearchBar />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="link-s-box">
                  <Link
                    to={"/dashboard"}
                    className="d-block link-s text-decoration-none d-flex align-items-center"
                  >
                    <BiSpreadsheet />
                    ADS...
                    <Badge pill bg="danger" className="fs-6">
                      {adsCount}
                    </Badge>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col className="link-s-box">
                  <Link
                    to={"/pro"}
                    className="d-block link-s text-decoration-none"
                  >
                    <RiVipDiamondLine />
                    PRO
                  </Link>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col className="link-s-box mb-2 ">
                  <Link
                    to={"/myProfile"}
                    className="link-s text-decoration-none"
                  >
                    <BiSolidUserAccount />
                    Account
                  </Link>
                </Col>
              </Row>
              <Row>
                <footer className="footer fs-6">
                  <p>&copy;{year}AntonioCancemiVigiMod</p>
                </footer>
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

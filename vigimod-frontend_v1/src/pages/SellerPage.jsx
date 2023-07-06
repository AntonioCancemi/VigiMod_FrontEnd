import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { getSeller } from "../axios/service/sellerService";
import { useParams } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { getAdsBySeller } from "../axios/service/adService";
import Ad from "../components/Ad";
import SellerInfo from "../components/SellerInfo";
import AdList from "../components/AdList";

const SellerPage = () => {
  const { config } = useContext(AuthContext);
  const { sellerId } = useParams();

  const [ads, setAds] = useState();
  const [id, setId] = useState("");

  useEffect(() => {
    getAdsBySeller(sellerId, config)
      .then((response) => setAds(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <Col lg={10}>
      <Container>
        <SellerInfo seller={sellerId} />
        <Row>
          <Col>
            <AdList ads={ads} show={true} />
            {ads?.map((ad) => (
              <Ad key={ad.id} ad={ad} showAd={false} />
            ))}
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default SellerPage;

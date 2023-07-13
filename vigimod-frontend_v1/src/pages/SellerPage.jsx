import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { getAdsBySeller } from "../axios/service/adService";
import SellerInfo from "../components/SellerInfo";
import AdList from "../components/AdList";
import { useDispatch, useSelector } from "react-redux";

const SellerPage = () => {
  const { config } = useContext(AuthContext);
  const { sellerId } = useParams();
  const ads = useSelector((state) => state.content.adToShow);

  const dispatch = useDispatch();
  console.log({ sellerId });

  useEffect(() => {
    if (sellerId) {
      console.log("sellerPage");
      getAdsBySeller(sellerId, config)
        .then((response) => response.data)
        .then((data) => dispatch(setAdsToShow(data)))
        .catch((error) => {
          console.error(error);
        });
      console.log(ads);
    }
  }, [sellerId]);
  return (
    <>
      {console.log(ads)}
      {sellerId ? (
        <Col lg={10}>
          <Container>
            <SellerInfo seller={sellerId} />
            <Row>
              <Col>
                <AdList ads={ads} show={true} />
                {/* {ads?.map((ad) => (
                  <Ad key={ad.id} ad={ad} showAd={false} />
                ))} */}
              </Col>
            </Row>
          </Container>
        </Col>
      ) : (
        <></>
      )}
    </>
  );
};

export default SellerPage;

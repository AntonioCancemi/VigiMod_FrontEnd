import React from "react";
import { Col, Row } from "react-bootstrap";
import ImageZoomModal from "./ImageZoomModal";
import { Link } from "react-router-dom";

import ActionOnAd from "./actionComponents/ActionOnAd";

const Ad = ({ ad, showAd }) => {
  const { product } = ad;
  const { seller } = ad;
  // const { seller } = product;
  // console.log(ad);

  return (
    <Row className=" border  border-3 border-dark text-start mb-4 p-2 ">
      {showAd ? (
        <>
          <Col lg={"auto"}>
            <Row>AD info</Row>
            <Row>
              <Col className=" border">ID AD: {ad?.id}</Col>
              <Col className=" border">status: {ad?.adStatus}</Col>
              <Col className=" border">
                date: {ad?.publicationDate.slice(0, 10)}
              </Col>
            </Row>
            <Row>Seller info</Row>
            <Row>
              <Col className=" border">
                <Link to={`/seller/${seller?.id}`}>
                  ID seller: {seller?.id}
                </Link>
              </Col>
              <Col className=" border">seller Type: {seller?.sellerType}</Col>
              <Col className=" border">Tel: {seller?.phoneNumber}</Col>
            </Row>
            <Row>
              <Col className=" border">username: {seller?.username}</Col>
              <Col className=" border">fullname: {seller?.fullName}</Col>
              <Col className=" border">email: {seller?.email}</Col>
            </Row>
            <Row>Product info</Row>
            <Row className="my-2 ms-3 fw-bold fs-3">{product?.title}</Row>
            <Row>
              <Col className="ad-Img-Container mt-3">
                <ImageZoomModal
                  images={[
                    "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
                    "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg",
                    "https://cutewallpaper.org/24/image-placeholder-png/image-placeholder-svg-png-icon-free-download-148071-onlinewebfontscom.png",
                  ]}
                />
                <Row></Row>
              </Col>
              <Col></Col>
            </Row>
            <Row className=" border">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
              totam. Ratione, iusto. Cumque quibusdam aliquid consectetur
              eligendi adipisci explicabo tenetur est, amet pariatur corrupti
              itaque quam, consequatur ad officiis aperiam. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Incidunt magni impedit
              magnam, eum veritatis ipsam? Animi sequi quos enim, laborum
              cupiditate dolor, maxime placeat, eveniet veniam vel expedita
              aspernatur rem?
            </Row>
          </Col>
          <Col>
            {/* action */}
            <ActionOnAd ad={ad} />
          </Col>
        </>
      ) : (
        <>
          <Col>
            <Link to={`/ad/${ad?.id}`}>ID AD: {ad?.id}</Link>
          </Col>
          <Col>
            <Link to={`/seller/${seller?.id}`}>ID seller: {seller?.id}</Link>
          </Col>
          <Col>status: {ad?.adStatus}</Col>
          <Col>{product?.title}</Col>
          <Col> date: {ad?.publicationDate.slice(0, 10)}</Col>
        </>
      )}
    </Row>
  );
};

export default Ad;

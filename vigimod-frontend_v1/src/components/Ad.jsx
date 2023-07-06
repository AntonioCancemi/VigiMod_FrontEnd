import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import ImageZoomModal from "./ImageZoomModal";
import DropDownAction from "./actionComponents/DropDownAction";
import { Link, useParams } from "react-router-dom";
import { getAd, updateAd } from "../axios/service/adService";
import { AuthContext } from "../auth/AuthProvider";
import { REJECTED } from "../OptionRej";

const Ad = ({ ad, showAd }) => {
  console.log(ad);
  const { config } = useContext(AuthContext);
  const [selectedOptionRej, setSelectedOptionRej] = useState("");
  const { adId } = useParams();
  const { product } = ad;
  const { seller } = product;
  const handleOptionSelect = (option) => {
    setSelectedOptionRej(option);
    const adUpdate = ad;
    adUpdate.adStatus = REJECTED;
    console.log(JSON.stringify(adUpdate));
    updateAd(adId, JSON.stringify(adUpdate), config)
      .then((response) => console.log(response.fata))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Row className=" border text-start mb-4">
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
              </Col>
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
            <Row className=" border">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
              totam. Ratione, iusto. Cumque quibusdam aliquid consectetur
              eligendi adipisci explicabo tenetur est, amet pariatur corrupti
              itaque quam, consequatur ad officiis aperiam.
            </Row>
            {/* action */}
            <Row>
              <div
                className="d-flex
          "
              >
                {ad?.adStatus == "PENDING" ? (
                  <>
                    <DropDownAction
                      options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                      onSelect={handleOptionSelect}
                    />
                    <Button variant="success">ACCEPT</Button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </Row>
          </Col>
        </>
      ) : (
        <Row>
          <Col>
            <Link to={`/ad/${ad?.id}`}>ID AD: {ad?.id}</Link>
          </Col>
          <Col>
            <Link to={`/seller/${seller?.id}`}>ID seller: {seller?.id}</Link>
          </Col>
          <Col>status: {ad?.adStatus}</Col>
          <Col>{product?.title}</Col>
          <Col> date: {ad?.publicationDate.slice(0, 10)}</Col>
        </Row>
      )}
    </Row>
  );
};

export default Ad;

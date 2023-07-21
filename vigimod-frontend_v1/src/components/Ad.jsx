import React from "react";
import { Badge, Col, Row, Table } from "react-bootstrap";
import ImageZoomModal from "./ImageZoomModal";
import { Link } from "react-router-dom";

import ActionOnAd from "./actionComponents/ActionOnAd";
import { ACCEPTED, PENDING, REJECTED, SUSPECTED } from "../OptionRej";
import { useDispatch } from "react-redux";
import { SET_AD_ID, setAdId } from "../redux/actions/searchbar.actions";

const Ad = ({ ad, showAd }) => {
  const dispatch = useDispatch();
  const { product } = ad;
  const { seller } = ad.product;
  var badgeStatusColor = "";
  switch (ad?.adStatus) {
    case PENDING:
      badgeStatusColor = "warning";
      break;
    case ACCEPTED:
      badgeStatusColor = "success";
      break;
    case REJECTED:
      badgeStatusColor = "danger";
      break;
    case SUSPECTED:
      badgeStatusColor = "dark";
      break;
    default:
      break;
  }

  return (
    <Row className="ad-container rounded text-start mb-4 p-2 fs-5 ">
      {showAd ? (
        <>
          <Col lg={"auto"}>
            <ActionOnAd ad={ad} />
          </Col>
          <Col lg={5}>
            <Row className="border border-top-0 mb-3">
              {/* <div className="">
                <strong>Ad status: </strong>
                <Badge pill bg={badgeStatusColor} className="fs-4">
                  {ad?.adStatus}
                </Badge>
              </div> */}
              <div className="">
                <p className="fs-4">{product?.title}</p>
              </div>
            </Row>
            <Row className="justify-content-start">
              <ImageZoomModal
                images={[
                  "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
                  "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg",
                  "https://cutewallpaper.org/24/image-placeholder-png/image-placeholder-svg-png-icon-free-download-148071-onlinewebfontscom.png",
                ]}
              />
            </Row>
            <Row className=" border py-2 justify-content-between">
              <Col lg={"auto"} className="d-flex align-items-center">
                <p>
                  Location: <span> {ad?.location} </span>
                </p>
              </Col>
              <Col lg={"auto"}>
                <Badge pill bg="dark" className="fs-4">
                  {product?.price} €
                </Badge>
              </Col>
            </Row>
            <Row>{product.description}</Row>
          </Col>
          <Col lg={"auto"} className="">
            <Table striped bordered hover>
              <thead>
                <th colSpan={3} className="text-center">
                  Product info
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>ProductID: </td>
                  <td>{product?.id}</td>
                </tr>
                <tr>
                  <td>Category: </td>
                  <td>{product?.category}</td>
                </tr>
                <tr>
                  <td>Brand: </td>
                  <td> {product?.brand}</td>
                </tr>
                <tr>
                  <td>Stock:</td>
                  <td>{product?.stock}</td>
                </tr>
              </tbody>
            </Table>

            <Table striped bordered hover>
              <thead>
                <th colSpan={3} className="text-center">
                  Ad info
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>AdID: </td>
                  <td>{ad?.id}</td>
                </tr>
                <tr>
                  <td>Publication date: </td>
                  <td>{ad?.publicationDate.slice(0, 10)}</td>
                </tr>
                <tr>
                  <td>Shipping:</td>
                  <td>{ad?.shippingType}</td>
                </tr>
                {ad?.lastUpdateAt ? (
                  <tr>
                    <td>last update</td>
                    <td>{ad?.lastUpdateAt.slice(0, 10)}</td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </Table>
          </Col>
        </>
      ) : (
        <>
          <Col>
            <Link to={`/ad`} onClick={() => dispatch(setAdId(ad?.id))}>
              ID AD: {ad?.id}
            </Link>
          </Col>

          <Col>
            status:
            <Badge pill bg={badgeStatusColor}>
              {ad?.adStatus}
            </Badge>
          </Col>
          <Col>{product?.title}</Col>
          <Col> date: {ad?.publicationDate.slice(0, 10)}</Col>
        </>
      )}
    </Row>
  );
};

export default Ad;

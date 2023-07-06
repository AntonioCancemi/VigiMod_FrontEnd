import React from "react";
import { Card, CardImg } from "react-bootstrap";

const Product = ({ product }) => {
  const { title, description, price, rating, thumbnail } = product;
  console.log(thumbnail);
  const zoomProps = {
    width: 300,
    height: 200,
    zoomWidth: 500,
    zoomHeight: 400,
    zoomPosition: "original",
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <img src="http://placekitten.com/g/300/300"></img>
      </Card.Body>
    </Card>
  );
};

export default Product;

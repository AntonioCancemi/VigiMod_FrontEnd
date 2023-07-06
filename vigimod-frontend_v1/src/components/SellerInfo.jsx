import { useContext, useEffect, useState } from "react";
import { getSeller } from "../axios/service/sellerService";
import { AuthContext } from "../auth/AuthProvider";
import { Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SellerInfo = (sellerId) => {
  const { config } = useContext(AuthContext);
  const [seller, setSeller] = useState();
  useEffect(() => {
    getSeller(sellerId, config)
      .then((response) => {
        setSeller(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sellerId]);
  return (
    <Row>
      <Col md={4} className="seller-image-col">
        <Image
          //src={seller?.image}
          src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
          alt="Seller"
          fluid
          className="seller-image"
        />
      </Col>
      <Col md={8}>
        <div className="seller-info">
          <h2>{seller?.fullName}</h2>
          <p>
            <strong>Username:</strong> {seller?.username}
          </p>
          <p>
            <strong>Email:</strong> {seller?.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {seller?.phoneNumber}
          </p>
          <p>
            <strong>Account Active:</strong>{" "}
            {seller?.accontActive ? "Yes" : "No"}
          </p>
          <p>
            <strong>Seller Type:</strong> {seller?.sellerType}
          </p>
        </div>
      </Col>
    </Row>
  );
};
export default SellerInfo;

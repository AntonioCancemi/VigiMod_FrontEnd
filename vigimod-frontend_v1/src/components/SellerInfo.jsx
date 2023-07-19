import { Col, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ACCEPTED, PENDING, REJECTED, SUSPECTED } from "../OptionRej";
import ProgressBarAds from "./PogressBarAds";

const SellerInfo = ({ seller }) => {
  const sellerAds = useSelector((state) => state.content.allAdsByS);
  //progres bar props
  const sellerAdsPen = sellerAds?.filter((ad) => ad.adStatus === PENDING);
  const sellerAdsRej = sellerAds?.filter((ad) => ad.adStatus === REJECTED);
  const sellerAdsAcc = sellerAds?.filter((ad) => ad.adStatus === ACCEPTED);
  const sellerAdsSus = sellerAds?.filter((ad) => ad.adStatus === SUSPECTED);

  return (
    <Row className="seller-i-container rounded p-3 ">
      <Col lg={9} className="  ">
        <Row className="fs-4  sticky-top">
          {/* image */}
          <Col lg={2} clas>
            <Image
              //src={seller?.image}
              src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
              alt="Seller"
              fluid
              className="seller-image rounded-circle"
            />
          </Col>
          {/* other info */}

          <Col lg={3} className="seller-info rounded-start ">
            <div>
              <strong>ID:</strong> <span>{seller?.id}</span>
            </div>

            <div>
              <strong>Type:</strong>
              <br />
              <span>{seller?.sellerType}</span>
            </div>
          </Col>
          <Col lg={3} className="seller-info ">
            <div>
              <strong>Username:</strong>
              <br /> <span>{seller?.username}</span>
            </div>
            <div>
              <strong>Fullname:</strong> <br />
              <span>{seller?.fullName}</span>
            </div>
          </Col>
          <Col lg={"auto"} className="seller-info rounded-end">
            <div>
              <strong>email:</strong>
              <br />
              <span>{seller?.email}</span>
            </div>
            <div>
              <strong>Phone Number:</strong> <br />
              <span>{seller?.phoneNumber}</span>
            </div>
          </Col>
        </Row>
      </Col>
      <Col lg={3} className="d-flex align-items-center">
        <div className="w-100">
          <ProgressBarAds
            acc={sellerAdsAcc?.length}
            rej={sellerAdsRej?.length}
            pen={sellerAdsPen?.length}
            all={sellerAds?.length}
            sus={sellerAdsSus?.length}
          />
        </div>
      </Col>
    </Row>
  );
};
export default SellerInfo;

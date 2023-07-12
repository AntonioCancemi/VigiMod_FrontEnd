import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { useParams } from "react-router-dom";
import { getAd } from "../axios/service/adService";
import Ad from "./Ad";
import { Col, Container } from "react-bootstrap";
import { PENDING } from "../OptionRej";
import { useDispatch, useSelector } from "react-redux";
import { setAd } from "../redux/actions/AdsAction";

const AdList = ({ ads, show }) => {
  console.log(ads);
  //large or small
  const [showAd, setShowAd] = useState();
  useEffect(() => {
    show ? setShowAd(true) : setShowAd(false);
    //built with out ads
  }, []);
  console.log();
  return (
    <>
      {ads ? (
        <Col lg={"auto"} className="mt-5">
          <Container fluid>
            {ads ? (
              ads.map((ad) => <Ad key={ad?.id} ad={ad} showAd={showAd} />)
            ) : (
              <Ad ad={null} showAd={showAd} />
            )}
          </Container>
        </Col>
      ) : (
        <>no content ads</>
      )}
    </>
  );
};
export default AdList;

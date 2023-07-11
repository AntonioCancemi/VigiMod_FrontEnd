import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { useParams } from "react-router-dom";
import { getAd } from "../axios/service/adService";
import Ad from "./Ad";
import { Col, Container } from "react-bootstrap";
import { PENDING } from "../OptionRej";
import { useDispatch, useSelector } from "react-redux";
import { setAd } from "../redux/actions/AdsAction";

const AdList = ({ show }) => {
  const ads = useSelector((state) => state.content.adsToShow);
  const { adId } = useParams();
  console.log(ads);
  //large or small
  const [showAd, setShowAd] = useState();
  useEffect(() => {
    show ? setShowAd(true) : setShowAd(false);
    //built with out ads
    console.log(adId ? adId : "no Ad id");
    // if (ads == null || adId) {
    //   getAd(adId, config)
    //     .then((response) => {
    //       // console.log(response.data);
    //       dispatch(setAd([response.data]));
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // } else {
    //built with ads
    // }
    // console.log(ads);
    // console.log(ad);
  }, []);

  return (
    <>
      {ads ? (
        <Col lg={"auto"} className="mt-5">
          <Container fluid>
            {ads ? (
              ads.map((ad) => <Ad ad={ad} showAd={showAd} />)
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

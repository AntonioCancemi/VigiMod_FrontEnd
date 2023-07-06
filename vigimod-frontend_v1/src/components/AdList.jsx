import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { useParams } from "react-router-dom";
import { getAd } from "../axios/service/adService";
import Ad from "./Ad";
import { Col, Container } from "react-bootstrap";

const AdList = ({ ads, show }) => {
  const { config } = useContext(AuthContext);
  const { adId } = useParams();
  const [data, setData] = useState();
  const [showAd, setShowAd] = useState();
  useEffect(() => {
    console.log(adId ? "getByID" : "getAll");
    show ? setShowAd(true) : setShowAd(false);
    //built with out ads
    if (ads == null) {
      getAd(adId, config)
        .then((response) => {
          console.log(response.data);
          setData([response.data]);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      //built with ads
      console.log(ads);
      setData(ads);
    }
    console.log(data);
  }, [adId]);
  return (
    <>
      {" "}
      <Col lg={"auto"} className="mt-5">
        <Container fluid>
          {data?.map((ad) => (
            <Ad ad={ad} showAd={showAd}></Ad>
          ))}
        </Container>
      </Col>
    </>
  );
};
export default AdList;

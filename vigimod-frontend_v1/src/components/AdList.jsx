import { useEffect, useState } from "react";

import Ad from "./Ad";
import { Col, Container } from "react-bootstrap";

const AdList = ({ ads, show }) => {
  //large or small
  // console.log(ads);
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
            {ads.map((ad) => (
              <Ad key={ad?.id} ad={ad} showAd={showAd} />
            ))}
          </Container>
        </Col>
      ) : (
        <>no content ads</>
      )}
    </>
  );
};
export default AdList;

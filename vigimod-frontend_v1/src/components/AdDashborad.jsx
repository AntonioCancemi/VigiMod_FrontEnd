import { useContext, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { getAd, getAds } from "../axios/service/adService";
import SellerInfo from "./SellerInfo";
import Ad from "./Ad";
import AdList from "./AdList";

const AdDashboard = () => {
  const { authData, config } = useContext(AuthContext);
  const { adId } = useParams();
  const showAd = true;
  const navigate = useNavigate();
  const [mappedData, setMappedData] = useState();
  useEffect(() => {
    if (authData) {
      console.log("dash useEffect");
      getAds(config)
        .then((response) => {
          // Map the data
          const map = Object.entries(response.data).map(([key, value]) => ({
            key,
            value,
          }));
          setMappedData(map);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      navigate("/login");
    }
  }, [authData]);
  // useEffect(() => {
  //   console.log(adId ? "getByID" : "getAll");
  //   if (mappedData == null) {
  //     getAd(adId, config)
  //       .then((response) => {
  //         console.log(response.data);
  //         setData([response.data]);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   } else {
  //     setMappedData(ads);
  //   }
  //   console.log(data);
  // }, [adId]);
  return (
    <Row>
      {mappedData ? (
        Object.keys(mappedData).map((key) => (
          <div key={key}>
            <SellerInfo sellerId={mappedData[key].key} />
            <AdList ads={mappedData[key].value} show={true}></AdList>
          </div>
        ))
      ) : (
        <></>
      )}
    </Row>
  );
};
export default AdDashboard;

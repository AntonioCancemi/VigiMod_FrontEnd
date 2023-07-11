import { useContext, useEffect, useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { getAd, getAds, getAdsForDashboard } from "../axios/service/adService";
import SellerInfo from "./SellerInfo";
import Ad from "./Ad";
import AdList from "./AdList";
import { ACCEPTED, PENDING, REJECTED } from "../OptionRej";
import { useDispatch, useSelector } from "react-redux";
import { resetIndex, setAds, setAdsToShow } from "../redux/actions/AdsAction";

const AdDashboard = () => {
  const dispatch = useDispatch();
  const ads = useSelector((state) => state.content.ads);
  const index = useSelector((state) => state.content.index);
  const { authData, config } = useContext(AuthContext);
  const navigate = useNavigate();
  const [key, setKey] = useState("queue");
  const [loading, setLoading] = useState(true);

  function updateDashboard() {
    if (authData) {
      console.log("update in progress");
      getAdsForDashboard(config)
        .then((response) => response.data)
        .then((data) => dispatch(setAds(data)))

        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          if (ads?.[0]) {
            setLoading(false);
          }
        });
    } else {
      navigate("/login");
    }
    console.log(ads);
  }
  useEffect(() => {
    // if()

    console.log("dash useEffect");
    updateDashboard();
    console.log(ads);
  }, [authData]);
  useEffect(() => {
    console.log("update useEffect[index]", index);
    if (authData) {
      //if (ads[0]?.value.filter((ad) => ad.adStatus === PENDING).length === 0) {
      updateDashboard();
      //  }
    }
  }, [index]);
  return (
    <>
      {ads?.[0] ? (
        <Row>
          <Col>
            <Row>
              <SellerInfo sellerId={ads[0]?.value[0]?.product?.seller} />
            </Row>
            <Row>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="queue" title="Queue">
                  <AdList
                    ads={ads[0]?.value?.filter((ad) => ad.adStatus === PENDING)}
                    show={true}
                    refresh={PENDING}
                  />
                </Tab>
                <Tab eventKey="rejected" title="Rejected">
                  <AdList
                    ads={ads[0]?.value?.filter(
                      (ad) => ad.adStatus === REJECTED
                    )}
                    show={true}
                    filter={REJECTED}
                  />
                </Tab>
                <Tab eventKey="accepted" title="Accepted">
                  <AdList
                    ads={ads[0]?.value?.filter(
                      (ad) => ad.adStatus === ACCEPTED
                    )}
                    show={true}
                    filter={ACCEPTED}
                  />
                </Tab>
              </Tabs>
            </Row>
          </Col>
        </Row>
      ) : (
        <>NON CI SONO PIU ANNUNCI</>
      )}
    </>
  );
};
export default AdDashboard;

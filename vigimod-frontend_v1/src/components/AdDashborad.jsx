import { useContext, useEffect, useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import SellerInfo from "./SellerInfo";
import AdList from "./AdList";
import { ACCEPTED, PENDING, REJECTED } from "../OptionRej";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAdsBySeller,
  fetchAdsForDashboard,
} from "../redux/actions/ad.GetDashboard";

const AdDashboard = () => {
  const { authData, config } = useContext(AuthContext);
  const pendingAds = useSelector((state) => state.content.pendingAds);
  const allAds = useSelector((state) => state.content.allAdsByS);
  const loading = useSelector((state) => state.content.loading);
  const error = useSelector((state) => state.content.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [key, setKey] = useState("queue");
  //1)Start fetch pending ads by seller
  useEffect(() => {
    if (!authData) {
      navigate("/login");
    }
    dispatch(fetchAdsForDashboard(config));
  }, [authData]);
  //2)fetch all ads for current seller
  useEffect(() => {
    if (authData) {
      dispatch(fetchAdsBySeller(pendingAds[0]?.key, config));
      setKey("queue");
    }
  }, [pendingAds]);
  return (
    <>
      {!error ? (
        !loading ? (
          <Row>
            <Col>
              <Row>
                <div className="sticky-top">
                  <SellerInfo
                    seller={pendingAds[0]?.value[0]?.product?.seller}
                  />
                </div>

                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3 trasparent "
                >
                  <Tab eventKey="queue" title="Queue" className="text-light">
                    <AdList
                      ads={allAds?.filter((ad) => ad.adStatus === PENDING)}
                      show={true}
                    />
                  </Tab>
                  <Tab eventKey="rejected" title="Rejected">
                    <AdList
                      ads={allAds?.filter((ad) => ad.adStatus === REJECTED)}
                      show={true}
                    />
                  </Tab>
                  <Tab eventKey="accepted" title="Accepted">
                    <AdList
                      ads={allAds?.filter((ad) => ad.adStatus === ACCEPTED)}
                      show={true}
                    />
                  </Tab>
                  <Tab eventKey="all" title="All ads">
                    <AdList ads={allAds} show={false} />
                  </Tab>
                </Tabs>
              </Row>
            </Col>
          </Row>
        ) : (
          <>NON CI SONO PIU ANNUNCI</>
        )
      ) : (
        <>error</>
      )}
    </>
  );
};
export default AdDashboard;

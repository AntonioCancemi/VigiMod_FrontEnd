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
} from "../redux/actions/adAction";

const AdDashboard = () => {
  const { authData, config } = useContext(AuthContext);
  const pendingAds = useSelector((state) => state.content.pendingAds);
  const allAds = useSelector((state) => state.content.allAdsByS);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [key, setKey] = useState("queue");

  useEffect(() => {
    if (authData) {
      dispatch(fetchAdsForDashboard(config));
    } else {
      navigate("/login");
    }
  }, [authData]);
  useEffect(() => {
    dispatch(fetchAdsBySeller(pendingAds[0]?.key, config));
  }, [pendingAds]);
  return (
    <>
      {pendingAds[0] ? (
        <Row>
          <Col>
            <Row>
              <SellerInfo seller={pendingAds[0]?.value[0]?.product?.seller} />
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
                  <AdList ads={allAds} show={true} />
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

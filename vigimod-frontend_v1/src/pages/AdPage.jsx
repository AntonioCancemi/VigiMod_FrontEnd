import { Col, Container, Row } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdById } from "../redux/actions/searchbar.actions";
import { AuthContext } from "../auth/AuthProvider";
import AdList from "../components/AdList";
import SellerInfo from "../components/SellerInfo";
import { useNavigate } from "react-router-dom";

const AdPage = () => {
  const { config } = useContext(AuthContext);
  const dispatch = useDispatch();
  const adId = useSelector((state) => state.search.ad.adId);
  const singleAd = useSelector((state) => state.search.ad.ad);
  const loading = useSelector((state) => state.search.ad.loading);
  const error = useSelector((state) => state.search.ad.error);
  useEffect(() => {
    dispatch(fetchAdById(adId, config));
  }, [adId]);
  return (
    <Col lg={"10"}>
      {!loading && !error ? (
        <Container fluid>
          <Row>
            <Col className="mt-5">
              <SellerInfo seller={singleAd[0]?.product?.seller} />
            </Col>
          </Row>
          <Row>
            <Col lg={"auto"} className="px-0 align-self-start sticky-top"></Col>
            <Col className="mx-3 mt-5">
              <AdList ads={singleAd} show={true} />
            </Col>
          </Row>
        </Container>
      ) : (
        <>No ads found</>
      )}
    </Col>
  );
};
export default AdPage;

import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getAd } from "../axios/service/adService";
import { AuthContext } from "../auth/AuthProvider";
import AdList from "../components/AdList";

const SearchPage = () => {
  const { id } = useParams();
  const { config } = useContext(AuthContext);
  const [ads, setAds] = useState();
  useEffect(() => {
    console.log(id);
    getAd(id, config)
      .then((response) => {
        console.log(response.data);
        setAds([response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return (
    <Col lg={"10"}>
      <Container fluid>
        <Row>
          <Col lg={"auto"} className="px-0 align-self-start sticky-top"></Col>
          <Col className="mx-3 mt-5">
            <AdList ads={ads} show={true} />
          </Col>
        </Row>
      </Container>
    </Col>
  );
};
export default SearchPage;

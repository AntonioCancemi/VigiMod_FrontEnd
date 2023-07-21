import {
  Badge,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Spinner,
} from "react-bootstrap";
import PieChartComponent from "../components/PieChartComponent";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../auth/AuthProvider";
import { fetchForMainDashboard } from "../redux/actions/mainData.get";
import { ACCEPTED, PENDING, REJECTED, SUSPECTED } from "../OptionRej";
import ColumnChart from "../components/ColumnChart";
import {
  BiBall,
  BiData,
  BiShapeCircle,
  BiSpreadsheet,
  BiStats,
} from "react-icons/bi";

const MainDashboardPage = () => {
  const dispatch = useDispatch();
  const { config } = useContext(AuthContext);
  const loading = useSelector((state) => state.allData.loading);
  const ads = useSelector((state) => state.allData.ads.content);
  const [susAdsCount, setSusAdsCount] = useState([]);
  function countSusBySeller(data) {
    const susCount = {};

    data?.forEach((item) => {
      const seller = item.product.seller;

      if (item.adStatus == SUSPECTED) {
        if (seller.id in susCount) {
          susCount[seller.id]++;
        } else {
          susCount[seller.id] = 1;
        }
      }
    });
    console.log(susCount);
    return susCount;
  }
  function countAdsByCategory(data) {
    const categoryCount = {};
    data?.forEach((item) => {
      const category = item.product.category;

      if (category in categoryCount) {
        categoryCount[category]++;
      } else {
        categoryCount[category] = 1;
      }
    });

    return categoryCount;
  }

  useEffect(() => {
    dispatch(fetchForMainDashboard(config));
  }, []);
  useEffect(() => {
    if (ads) {
      setSusAdsCount(countSusBySeller(ads));
    }
  }, [ads]);
  return (
    <Col lg={"10"} className="p-0 main-col">
      <Container fluid className="ad-dashboard-container ps-3">
        <div className="mx-3">
          <Row>
            <h2>MAIN DASHBOARD</h2>
          </Row>
          {loading ? (
            <Spinner animation="grow" />
          ) : (
            <>
              <Row className="gap-2">
                <Col xs={9} className="   ">
                  <Row className="dash-title d-flex align-self-center d  ps-2 mb-3 fs-2">
                    <Col>
                      <BiShapeCircle />
                      ADS
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col className="ps-3   ">
                      <Row className="pie-chart-container   rounded  ">
                        <h3 className="bg-light rounded-top py-2 shadow-effect">
                          Ad status
                        </h3>
                        <PieChartComponent
                          data={[
                            {
                              name: "ACCEPTED",
                              value: ads?.filter(
                                (ad) => ad.adStatus === ACCEPTED
                              ).length,
                              color: "rgb(25, 135, 84)",
                            },
                            {
                              name: "REJECTED",
                              value: ads?.filter(
                                (ad) => ad.adStatus === REJECTED
                              ).length,
                              color: "rgb(220, 53, 69) ",
                            },
                            {
                              name: "PENDING",
                              value: ads?.filter(
                                (ad) => ad.adStatus === PENDING
                              ).length,
                              color: "rgb(255, 193, 7)",
                            },
                            {
                              name: "SUSPECTED",
                              value: ads?.filter(
                                (ad) => ad.adStatus === SUSPECTED
                              ).length,
                              color: "rgb(0, 0, 0)",
                            },
                          ]}
                        />
                      </Row>
                    </Col>
                    <Col className="ps-3  ">
                      <Row className="pie-chart-container  rounded  ">
                        <h3 className="bg-light rounded-top py-2 shadow-effect">
                          Shipping Type
                        </h3>
                        <PieChartComponent
                          data={[
                            {
                              name: "HOME DELIVERY",
                              value: ads?.filter(
                                (ad) => ad.shippingType === "HOME_DELIVERY"
                              ).length,
                              color: "darkblue",
                            },
                            {
                              name: "WITHDRAW",
                              value: ads?.filter(
                                (ad) => ad.shippingType === "WITHDRAW"
                              ).length,
                              color: "blue ",
                            },
                            {
                              name: "EXCHANGE",
                              value: ads?.filter(
                                (ad) => ad.shippingType === "EXCHANGE"
                              ).length,
                              color: "lightblue",
                            },
                          ]}
                        />
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className=" ms-1 bg-light rounded ">
                      <Row className="pie-chart-container rounded  ">
                        <h3 className="bg-light rounded-top py-2 shadow-effect">
                          Suspected Seller
                        </h3>
                      </Row>
                      <ListGroup className="fs-5">
                        {Object.keys(susAdsCount)
                          .sort(
                            (keyA, keyB) =>
                              susAdsCount[keyB] - susAdsCount[keyA]
                          )
                          .map((key) => (
                            <ListGroupItem key={key}>
                              <div className="">
                                <div>
                                  Seller ID:
                                  <Badge className="mt-2" pill>
                                    {key}
                                  </Badge>
                                </div>
                                <div>
                                  Suspected Ads number:{" "}
                                  <Badge bg="danger" pill>
                                    {susAdsCount[key]}
                                  </Badge>
                                </div>
                              </div>
                            </ListGroupItem>
                          ))}
                      </ListGroup>
                    </Col>
                    <Col className="ps-3  ">
                      <Row className="pie-chart-container   rounded  ">
                        <h3 className="bg-light rounded-top py-2 shadow-effect">
                          Ad status
                        </h3>
                        <PieChartComponent
                          data={[
                            {
                              name: "AGENCY PRO",
                              value: ads?.filter(
                                (ad) =>
                                  ad.product.seller.sellerType === "AGENCY_PRO"
                              ).length,
                              color: "darkred",
                            },
                            {
                              name: "PRIVATE",
                              value: ads?.filter(
                                (ad) =>
                                  ad.product.seller.sellerType === "PRIVATE"
                              ).length,
                              color: "rgb(197, 95, 0)",
                            },
                            {
                              name: "AGENCY",
                              value: ads?.filter(
                                (ad) =>
                                  ad.product.seller.sellerType === "AGENCY"
                              ).length,
                              color: "rgb(228, 186, 0)",
                            },
                          ]}
                        />
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col className="">
                  <Row className="pie-chart-container rounded scrollable-list">
                    <h3 className="bg-light rounded-top py-2 shadow-effect">
                      Category Ads Count
                    </h3>

                    <ColumnChart
                      categoryAdsCount={countAdsByCategory(ads)}
                      all={ads?.length}
                    />
                  </Row>
                  {/* <Row className="pie-chart-container rounded  ">
                    <h3 className="bg-light rounded-top py-2 shadow-effect">
                      Category Ads Count
                    </h3>
                  </Row>
                  <ListGroup>
                    {/* {susAdsCount.keys?.map((item, index) => (
                      <ListGroupItem>
                        <div>
                          <p>{item.name}</p>
                          <p>{item.adsCount}</p>
                        </div>
                      </ListGroupItem>
                    ))} 
                  </ListGroup> */}
                </Col>
              </Row>
            </>
          )}
        </div>
      </Container>
    </Col>
  );
};
export default MainDashboardPage;

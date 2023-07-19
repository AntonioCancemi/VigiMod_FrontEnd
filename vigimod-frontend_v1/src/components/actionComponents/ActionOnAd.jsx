import { Button, ButtonGroup, Row } from "react-bootstrap";
import DropDownAction from "./DropDownAction";
import { useNavigate } from "react-router-dom";
import { ACCEPTED, PENDING, REJECTED, SUSPECTED } from "../../OptionRej";
import { AuthContext } from "../../auth/AuthProvider";
import { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateAd } from "../../axios/service/adService";
import {
  fetchAdsBySeller,
  fetchAdsForDashboard,
} from "../../redux/actions/ad.GetDashboard";
import { fetchAdById } from "../../redux/actions/searchbar.actions";

const ActionOnAd = ({ ad }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adId = useSelector((state) => state.search.ad.adId);
  const { authData, config } = useContext(AuthContext);
  const currentDateTime = new Date();
  const pathURLFinale = window.location.pathname;
  console.log(pathURLFinale);
  const handleOptionSelect = (option) => {
    updateAdfunction(REJECTED, option);
  };

  const handleAcceptClick = () => {
    updateAdfunction(ACCEPTED, "accepted");
  };
  const handleSuspectedClick = () => {
    updateAdfunction(SUSPECTED, "suspected");
  };

  const handleUpdateStatusClick = () => {
    updateAdfunction(PENDING, "in queue for update");
  };
  function updateAdfunction(status, option) {
    //object copy
    if (!authData) {
      navigate("/login");
    }
    const updatedAd = {
      ...ad,
      adStatus: status,
      motivation: option,
      //object mutation
      lastUpdateAt: currentDateTime.toISOString(),
    };
    //console.log("function:update AD to:", updatedAd);
    //POST
    updateAd(updatedAd.id, JSON.stringify(updatedAd), config)
      .then((response) => {
        console.log(response.status);
      })
      //PUT DATA INTO STORE.content.pendingAds
      .then(() =>
        pathURLFinale == "/ad"
          ? dispatch(fetchAdById(adId, config))
          : dispatch(fetchAdsForDashboard(config))
      )
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <Row className="text-start">
      <div
        className="d-flex justify-content-start flex-colunm
          "
      >
        {ad?.adStatus === "PENDING" ? (
          <ButtonGroup vertical>
            <Button variant="danger" style={{ height: 50 }}>
              <DropDownAction
                options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                onSelect={handleOptionSelect}
              />
            </Button>
            <Button
              variant="success"
              onClick={handleAcceptClick}
              style={{ height: 50 }}
            >
              ACCEPT
            </Button>
            <Button
              variant="warning"
              onClick={handleSuspectedClick}
              style={{ height: 50 }}
            >
              SUSPECT
            </Button>
          </ButtonGroup>
        ) : (
          <Button onClick={handleUpdateStatusClick}>UPDATE STATUS</Button>
        )}
      </div>
    </Row>
  );
};
export default ActionOnAd;

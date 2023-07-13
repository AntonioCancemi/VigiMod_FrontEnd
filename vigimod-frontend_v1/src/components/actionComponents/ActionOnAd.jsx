import { Button, Row } from "react-bootstrap";
import DropDownAction from "./DropDownAction";
import { useNavigate } from "react-router-dom";
import { ACCEPTED, PENDING, REJECTED } from "../../OptionRej";
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

  const handleOptionSelect = (option) => {
    updateAdfunction(REJECTED, option);
  };

  const handleAcceptClick = () => {
    updateAdfunction(ACCEPTED, "accepted");
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
        adId
          ? dispatch(fetchAdById(adId, config))
          : dispatch(fetchAdsForDashboard(config))
      )
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <Row className="text-center">
      <div
        className="d-flex justify-content-center
          "
      >
        {ad?.adStatus === "PENDING" ? (
          <>
            <DropDownAction
              options={["Option 1", "Option 2", "Option 3", "Option 4"]}
              onSelect={handleOptionSelect}
            />
            <Button variant="success" onClick={handleAcceptClick}>
              ACCEPT
            </Button>
          </>
        ) : (
          <Button onClick={handleUpdateStatusClick}>UPDATE STATUS</Button>
        )}
      </div>
    </Row>
  );
};
export default ActionOnAd;

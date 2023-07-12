import { Button, Row } from "react-bootstrap";
import DropDownAction from "./DropDownAction";
import { useNavigate } from "react-router-dom";
import { ACCEPTED, PENDING, REJECTED } from "../../OptionRej";
import { AuthContext } from "../../auth/AuthProvider";
import { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateAd } from "../../axios/service/adService";
import { fetchAdsForDashboard } from "../../redux/actions/adAction";

const ActionOnAd = ({ ad }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { config } = useContext(AuthContext);
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
    const updatedAd = {
      ...ad,
      adStatus: status,
      motivation: option,
      lastUpdateAt: currentDateTime.toISOString(),
    };
    console.log("function:update AD to:", updatedAd);
    updateAd(updatedAd.id, JSON.stringify(updatedAd), config)
      .then((response) => {
        console.log(response.status);
      })
      .then(() => dispatch(fetchAdsForDashboard(config)))
      .catch((error) => {
        console.error(error);
      });

    console.log("update");
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

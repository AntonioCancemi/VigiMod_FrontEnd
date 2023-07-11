import { Button, Row } from "react-bootstrap";
import DropDownAction from "./DropDownAction";
import { useNavigate } from "react-router-dom";
import { ACCEPTED, PENDING, REJECTED } from "../../OptionRej";
import { AuthContext } from "../../auth/AuthProvider";
import { useContext } from "react";
import {
  getAd,
  getAds,
  getAdsBySeller,
  updateAd,
} from "../../axios/service/adService";
import { useDispatch, useSelector } from "react-redux";
import { increaseIndex } from "../../redux/actions/AdsAction";

const ActionOnAd = ({ ad }) => {
  // console.log(ad);

  const index = useSelector((state) => state.content.index);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    console.log("function");
    const updatedAd = {
      ...ad,
      adStatus: status,
      motivation: option,
      lastUpdateAt: currentDateTime.toISOString(),
    };
    updateAd(updatedAd.id, JSON.stringify(updatedAd), config)
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.error(error);
      });
    dispatch(increaseIndex());
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
        <Button onClick={() => dispatch(increaseIndex())}>
          increase index:{index}
        </Button>
      </div>
    </Row>
  );
};
export default ActionOnAd;

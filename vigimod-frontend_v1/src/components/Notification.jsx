import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const Notification = ({ message }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleAnimationEnd = () => {
    if (!show) {
      // Nascondi completamente la notifica dopo l'uscita
      setShow(false);
    }
  };

  return (
    <div
      className={`notification-container ${show ? "show" : ""}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {show && (
        <Alert variant="success" className="notification-alert">
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;

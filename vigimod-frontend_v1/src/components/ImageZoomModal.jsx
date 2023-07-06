import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const ImageZoomModal = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div>
        {images.map((image, index) => (
          <img
            className="mx-2"
            width={150}
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      <Modal show={showModal} onHide={handleModalClose} centered size="lg">
        <Modal.Body className="text-center">
          <img
            width={700}
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="zoomed-image"
          />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handlePrevImage}>Prev</button>
          <button onClick={handleNextImage}>Next</button>
          <button onClick={handleModalClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageZoomModal;

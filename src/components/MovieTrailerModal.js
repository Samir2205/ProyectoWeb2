import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const MovieTrailerModal = ({ isOpen, toggle, trailerUrl }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Tráiler</ModalHeader>
      <ModalBody className="text-center">
        <iframe
          width="100%"
          height="400px"
          src={trailerUrl}
          title="Movie Trailer"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ModalBody>
    </Modal>
  );
};

export default MovieTrailerModal;

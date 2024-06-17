// src/components/MovieDetailsModal.js
import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const MovieDetailsModal = ({ movie, isOpen, toggle }) => {
  if (!movie) return null;

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{movie.title}</ModalHeader>
      <ModalBody>
        <img src={movie.image} alt={movie.title} className="img-fluid mb-3" />
        <p>
          <strong>Descripción:</strong> {movie.description}
        </p>
        <p>
          <strong>Director:</strong> {movie.director}
        </p>
        <p>
          <strong>Reparto:</strong> {movie.cast.join(", ")}
        </p>
        <p>
          <strong>Duración:</strong> {movie.duration} minutos
        </p>
        <p>
          <strong>Disponible:</strong> {movie.disponible}
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default MovieDetailsModal;

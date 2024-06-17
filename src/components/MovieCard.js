import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  CardText,
} from "reactstrap";
import MovieDetailsModal from "./MovieDetailsModal";
import MovieTrailerModal from "./MovieTrailerModal";

const MovieCard = ({ movie }) => {
  const [detailsModal, setDetailsModal] = useState(false);
  const [trailerModal, setTrailerModal] = useState(false);
  const navigate = useNavigate();

  const toggleDetailsModal = () => setDetailsModal(!detailsModal);
  const toggleTrailerModal = () => setTrailerModal(!trailerModal);

  const handleReserveClick = () => {
    navigate("/reservation", { state: { selectedMovie: movie.title } });
  };

  return (
    <div>
      <Card className="movie-card mb-3">
        <CardImg top width="100%" src={movie.image} alt={movie.title} />
        <CardBody>
          <CardTitle tag="h5">{movie.title}</CardTitle>
          <CardText>
            Rating: {movie.rating}{" "}
            <span role="img" aria-label="star">
              ⭐
            </span>
          </CardText>
          <Button color="primary" onClick={toggleDetailsModal} className="mr-2">
            Detalles
          </Button>
          <Button
            color="secondary"
            onClick={toggleTrailerModal}
            className="mr-2"
          >
            Ver Tráiler
          </Button>
          <Button color="success" onClick={handleReserveClick}>
            Reservar
          </Button>
        </CardBody>
      </Card>
      <MovieDetailsModal
        movie={movie}
        isOpen={detailsModal}
        toggle={toggleDetailsModal}
      />
      <MovieTrailerModal
        trailerUrl={movie.trailerUrl}
        isOpen={trailerModal}
        toggle={toggleTrailerModal}
      />
    </div>
  );
};

export default MovieCard;

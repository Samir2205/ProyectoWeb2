import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
} from "reactstrap";

const initialReviews = [
  {
    movieId: 1,
    reviews: [
      { id: 1, user: "Juan", comment: "¡Excelente película!", rating: 5 },
      { id: 2, user: "Maria", comment: "Me gustó mucho.", rating: 4 },
    ],
  },
  {
    movieId: 2,
    reviews: [{ id: 1, user: "Carlos", comment: "No está mal.", rating: 3 }],
  },
  {
    movieId: 3,
    reviews: [
      { id: 1, user: "Ana", comment: "Me encantó la actuación.", rating: 5 },
      { id: 2, user: "Luis", comment: "Buena trama y efectos.", rating: 4 },
    ],
  },
  {
    movieId: 4,
    reviews: [
      { id: 1, user: "Pedro", comment: "Un poco aburrida.", rating: 2 },
      { id: 2, user: "Lucia", comment: "Esperaba más.", rating: 3 },
    ],
  },
  {
    movieId: 5,
    reviews: [
      { id: 1, user: "Marta", comment: "Muy divertida.", rating: 4 },
      {
        id: 2,
        user: "Jorge",
        comment: "Ideal para toda la familia.",
        rating: 5,
      },
    ],
  },
  {
    movieId: 6,
    reviews: [
      { id: 1, user: "Rosa", comment: "Demasiado predecible.", rating: 2 },
      {
        id: 2,
        user: "Oscar",
        comment: "Los efectos fueron geniales.",
        rating: 3,
      },
    ],
  },
  {
    movieId: 7,
    reviews: [
      { id: 1, user: "Raul", comment: "Una obra maestra.", rating: 5 },
      { id: 2, user: "Elena", comment: "Muy conmovedora.", rating: 5 },
    ],
  },
  {
    movieId: 8,
    reviews: [
      {
        id: 1,
        user: "Gabriela",
        comment: "No es mi tipo de película.",
        rating: 2,
      },
      {
        id: 2,
        user: "Fernando",
        comment: "Interesante pero lenta.",
        rating: 3,
      },
    ],
  },
  {
    movieId: 9,
    reviews: [
      {
        id: 1,
        user: "Silvia",
        comment: "Una experiencia visual increíble.",
        rating: 5,
      },
      {
        id: 2,
        user: "Diego",
        comment: "Muy buena de principio a fin.",
        rating: 4,
      },
    ],
  },
];

const movies = [
  {
    id: 1,
    title: "Bad Boys 4: Hasta la Muerte",
    description:
      "En esta ocasión, el Capitán Howard, interpretado por Joe Pantoliano, se encuentra en el ojo de la tormenta, acusado de ser un traficante de drogas de larga data.",
    image: "images/BadBoys.jpg",
    director: "Adil El Arbi, Bilall Fallah",
    cast: ["Will Smith", "Martin Lawrence"],
    duration: 115,
    type: "accion",
    rating: 4.8,
    trailerUrl: "https://www.youtube.com/embed/8KXy_GZZKLA",
    defaultDate: "2024-07-01T19:30",
    showtimes: ["2024-07-01T17:00", "2024-07-01T19:30", "2024-07-01T22:00"],
  },
  {
    id: 2,
    title: "Planeta Simios: Nuevo Reino",
    description:
      "Muchos años después del reinado de César, un joven simio emprende un viaje que lo llevará a cuestionar todo lo que le han enseñado sobre el pasado y a tomar decisiones que definirán el futuro tanto para los simios como para los humanos.",
    image: "images/Planeta.jpeg",
    director: "Wes Ball",
    cast: ["Owen Teague", "Freya Allan", "Peter Macon"],
    duration: 145,
    type: "accion",
    rating: 4.5,
    trailerUrl: "https://www.youtube.com/embed/raYE6Ild7a4",
    defaultDate: "2024-07-01T19:30",
    showtimes: ["2024-07-01T17:00", "2024-07-01T19:30", "2024-07-01T22:00"],
  },
  {
    id: 3,
    title: "Horrorland",
    description:
      "Una exclusiva noche privada de Halloween en Liseberg se convierte rápidamente en una verdadera pesadilla.",
    image: "images/Horror.jpg",
    director: "Simon Sandquist",
    cast: ["Amanda Lindh", "Omar Rudberg", "Wilma Lidén"],
    duration: 93,
    type: "terror",
    rating: 4.0,
    trailerUrl: "https://www.youtube.com/embed/uLa-MDa9HLc",
    defaultDate: "2024-07-01T19:30",
    showtimes: ["2024-07-01T17:00", "2024-07-01T19:30", "2024-07-01T22:00"],
  },
  {
    id: 4,
    title: "Mi Villano Favorito 4",
    description:
      "Gru, Lucy, Margo, Edith y Agnes dan la bienvenida a un nuevo miembro de la familia, Gru Jr., que se empeña en atormentar a su padre. Gru tiene una nueva némesis, Maxime Le Mal, y su novia Valentina, y la familia se ve obligada a huir.",
    image: "images/villano.jpg",
    director: "Patrick Delage, Chris Renaud",
    cast: ["Steve Carell", "Kristen Wiig", "Pierre Coffin"],
    duration: 110,
    type: "animacion",
    rating: 3.5,
    trailerUrl: "https://www.youtube.com/embed/I0_qFoptZ4Y",
    defaultDate: "2024-07-01T19:30",
    showtimes: ["2024-07-01T17:00", "2024-07-01T19:30", "2024-07-01T22:00"],
  },
  {
    id: 5,
    title: "Furiosa; De La Saga Mad Max",
    description:
      "Al caer el mundo, la joven Furiosa es arrebatada del Lugar Verde de Muchas Madres y cae en manos de una gran horda de motoristas liderada por el señor de la guerra Dementus",
    image: "images/Furiosa.jpg",
    director: "George Miller",
    cast: ["George Miller", "Nico Lathouris", "Byron Kennedy"],
    duration: 160,
    type: "accion",
    rating: 3.5,
    trailerUrl: "https://www.youtube.com/embed/BUvtEhcuavU",
    defaultDate: "2024-07-01T19:30",
    showtimes: ["2024-07-01T17:00", "2024-07-01T19:30", "2024-07-01T22:00"],
  },
  {
    id: 6,
    title: "Observados",
    description:
      "Sigue a Mina, una artista de 28 años, que se queda varada en un extenso e inmaculado bosque del oeste de Irlanda. Tras encontrar refugio, queda atrapada junto a tres desconocidos, acechados cada noche por misteriosas criaturas.",
    image: "images/Observados.webp",
    director: "Ishana Shyamalan",
    cast: ["Dakota Fanning", "Georgina Campbell", "Oliver Finnegan"],
    duration: 115,
    type: "accion",
    rating: 2.5,
    trailerUrl: "https://www.youtube.com/embed/05vDpEnuLWI",
    defaultDate: "2024-07-01T19:30",
    showtimes: ["2024-07-01T17:00", "2024-07-01T19:30", "2024-07-01T22:00"],
  },
  {
    id: 7,
    title: "Alien:Romulus",
    description:
      "Los jóvenes de un mundo lejano deben enfrentarse a la forma de vida más aterradora del universo",
    image: "images/Alien.webp",
    director: "Federico Álvarez",
    cast: ["Cailee Spaeny", "Isabela Merced", "David Jonsson"],
    duration: 150,
    type: "terror",
    rating: 5.0,
    trailerUrl: "https://www.youtube.com/embed/kTpc5SoBVu0",
    defaultDate: "2024-07-01T19:30",
    showtimes: ["2024-07-01T17:00", "2024-07-01T19:30", "2024-07-01T22:00"],
  },
  {
    id: 8,
    title: "Un Espía y Medio",
    description:
      "Dos viejos compañeros de secundaria que huyen después de que uno de ellos se une a la CIA para salvar al mundo de un terrorista que pretende vender códigos satelitales.",
    image: "images/Espia.jpg",
    director: "Rawson Marshall Thurber",
    cast: ["Dwayne Johnson", "Kevin Hart", "Amy Ryan"],
    duration: 108,
    type: "comedia",
    rating: 4.7,
    trailerUrl: "https://www.youtube.com/embed/eQnbwxzCzQ8",
    defaultDate: "2024-07-01T19:30",
    showtimes: ["2024-07-01T17:00", "2024-07-01T19:30", "2024-07-01T22:00"],
  },
  {
    id: 9,
    title: "El Especialista",
    description:
      "Tras un accidente que casi acaba con su carrera, este héroe de clase trabajadora debe seguir la pista de una estrella de cine desaparecida.",
    image: "images/Especialista.webp",
    director: "David Leitch",
    cast: ["Ryan Gosling", "Emily Blunt", "Teresa Palmer"],
    duration: 126,
    type: "comedia",
    rating: 4.0,
    trailerUrl: "https://www.youtube.com/embed/4k8I5TtURG8",
    defaultDate: "2024-07-01T19:30",
    showtimes: ["2024-07-01T17:00", "2024-07-01T19:30", "2024-07-01T22:00"],
  },
];
const MovieReviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [newReview, setNewReview] = useState({
    user: "",
    comment: "",
    rating: 0,
  });

  const handleMovieChange = (e) => {
    setSelectedMovie(e.target.value);
  };

  const handleReviewChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleAddReview = () => {
    if (
      selectedMovie &&
      newReview.user &&
      newReview.comment &&
      newReview.rating
    ) {
      const movieReviews = reviews.find(
        (r) => r.movieId === parseInt(selectedMovie)
      );
      if (movieReviews) {
        movieReviews.reviews.push({
          id: movieReviews.reviews.length + 1,
          ...newReview,
        });
      } else {
        reviews.push({
          movieId: parseInt(selectedMovie),
          reviews: [{ id: 1, ...newReview }],
        });
      }
      setReviews([...reviews]);
      setNewReview({ user: "", comment: "", rating: 0 });
    }
  };

  const selectedMovieData = movies.find(
    (movie) => movie.id === parseInt(selectedMovie)
  );

  return (
    <Container className="text-white my-5">
      <h1 className="text-center mb-4 display-4 review">
        Reseñas de Películas
      </h1>
      <Row className="mb-5">
        <Col md="4">
          <FormGroup>
            <Label for="movieSelect">Selecciona una película</Label>
            <Input
              type="select"
              id="movieSelect"
              onChange={handleMovieChange}
              value={selectedMovie}
            >
              <option value="">-- Selecciona una película --</option>
              {movies.map((movie) => (
                <option key={movie.id} value={movie.id}>
                  {movie.title}
                </option>
              ))}
            </Input>
          </FormGroup>
          {selectedMovieData && (
            <Card className="bg-dark text-white mb-3">
              <CardImg
                top
                width="100%"
                src={selectedMovieData.image}
                alt={selectedMovieData.title}
              />
              <CardBody>
                <CardTitle tag="h5">{selectedMovieData.title}</CardTitle>
                <CardText>{selectedMovieData.description}</CardText>
              </CardBody>
            </Card>
          )}
        </Col>
        <Col md="8">
          <h3>Agregar Reseña</h3>
          <Form inline>
            <FormGroup className="mr-2">
              <Label for="user" className="mr-2">
                Usuario
              </Label>
              <Input
                type="text"
                id="user"
                name="user"
                placeholder="Tu nombre"
                onChange={handleReviewChange}
                value={newReview.user}
              />
            </FormGroup>
            <FormGroup className="mr-2">
              <Label for="comment" className="mr-2">
                Comentario
              </Label>
              <Input
                type="text"
                id="comment"
                name="comment"
                placeholder="Tu reseña"
                onChange={handleReviewChange}
                value={newReview.comment}
              />
            </FormGroup>
            <FormGroup className="mr-2">
              <Label for="rating" className="mr-2">
                Calificación
              </Label>
              <Input
                type="select"
                id="rating"
                name="rating"
                onChange={handleReviewChange}
                value={newReview.rating}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Input>
            </FormGroup>
            <Button color="primary" onClick={handleAddReview}>
              Agregar
            </Button>
          </Form>
        </Col>
      </Row>
      {selectedMovie && (
        <Row>
          <Col md="12">
            <h3>Reseñas</h3>
            {reviews
              .filter((review) => review.movieId === parseInt(selectedMovie))
              .flatMap((review) => review.reviews)
              .map((review) => (
                <Card key={review.id} className="bg-dark text-white mb-3">
                  <CardBody>
                    <CardTitle tag="h5">{review.user}</CardTitle>
                    <CardText>{review.comment}</CardText>
                    <CardText>Rating: {review.rating}</CardText>
                  </CardBody>
                </Card>
              ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MovieReviews;

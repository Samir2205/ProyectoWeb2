import React, { useState, useEffect } from "react";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useLocation } from "react-router-dom";

const Reservation = () => {
  const location = useLocation();
  const selectedMovie = location.state?.selectedMovie || "";

  const moviesList = [
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
      rating: 3.0,
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
      defaultDate: "2024-07-01T17:00",
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movie, setMovie] = useState(selectedMovie);
  const [date, setDate] = useState("");
  const [showtimes, setShowtimes] = useState([]);

  useEffect(() => {
    const selectedMovieDetails = moviesList.find(
      (movie) => movie.title === selectedMovie
    );
    if (selectedMovieDetails) {
      setMovie(selectedMovieDetails.title);
      setDate(selectedMovieDetails.defaultDate);
      setShowtimes(selectedMovieDetails.showtimes);
    }
  }, [selectedMovie]);

  const handleMovieChange = (e) => {
    const selectedMovie = moviesList.find(
      (movie) => movie.title === e.target.value
    );
    setMovie(selectedMovie ? selectedMovie.title : "");
    setDate(selectedMovie ? selectedMovie.defaultDate : "");
    setShowtimes(selectedMovie ? selectedMovie.showtimes : []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, movie, date });
  };

  return (
    <div className="form">
      <Container className="text-white my-5">
        <h1 className="text-center mb-4 display-4">Reserva tus entradas</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Nombre:</Label>
            <Input
              type="text"
              id="name"
              placeholder="Introduce tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Correo Electrónico:</Label>
            <Input
              type="email"
              id="email"
              placeholder="Introduce tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="movie">Película:</Label>
            <Input
              type="select"
              id="movie"
              value={movie}
              onChange={handleMovieChange}
            >
              <option value="">Selecciona una película</option>
              {moviesList.map((movie) => (
                <option key={movie.id} value={movie.title}>
                  {movie.title}
                </option>
              ))}
            </Input>
          </FormGroup>
          {showtimes.length > 0 && (
            <FormGroup>
              <Label for="date">Fecha y Hora:</Label>
              <Input
                type="select"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              >
                {showtimes.map((time, index) => (
                  <option key={index} value={time}>
                    {new Date(time).toLocaleString()}
                  </option>
                ))}
              </Input>
            </FormGroup>
          )}
          <Button type="submit" color="primary" block>
            Reservar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Reservation;

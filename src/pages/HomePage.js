// src/pages/HomePage.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import Categories from "../components/Categories";
import UserReviews from "../components/UserReviews";

const HomePage = () => {
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
  ];

  return (
    <div>
      <Container
        fluid
        className="welcome-section text-center bg-dark text-white py-5"
      >
        <h1 className="display-4">Bienvenido a CinePol</h1>
        <p className="lead">
          Descubre las mejores películas y reserva tus entradas ahora.
        </p>
        <Categories />
      </Container>

      <Container className="text-center text-white py-5">
        <h1 className="display-4" style={{ fontFamily: "Arial, sans-serif" }}>
          Estrenos
        </h1>
        <Row>
          {movies.map((movie) => (
            <Col key={movie.id} sm="12" md="6" lg="4" className="mb-4">
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>

      <UserReviews />
    </div>
  );
};

export default HomePage;

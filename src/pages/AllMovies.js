// src/pages/AllMovies.js
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Input, Label, FormGroup } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const AllMovies = () => {
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
      disponible: ["2024-06-12 a 2024-07-01"],
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
      disponible: ["2024-06-12 a 2024-07-01"],
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
      disponible: ["2024-06-12 a 2024-07-01"],
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
      disponible: ["2024-06-12 a 2024-07-01"],
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
      disponible: ["2024-06-12 a 2024-07-01"],
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
      disponible: ["2024-06-12 a 2024-07-01"],
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
      disponible: ["2024-06-12 a 2024-07-01"],
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
      disponible: ["2024-06-12 a 2024-07-01"],
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
      disponible: ["2024-06-12 a 2024-07-01"],
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialType = searchParams.get("category") || "";
  const [selectedType, setSelectedType] = useState(initialType);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("title");

  useEffect(() => {
    setSelectedType(initialType);
  }, [initialType]);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedType(value);
    navigate(`/all-movies?category=${value}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredMovies = movies
    .filter((movie) => {
      return (
        (selectedType ? movie.type === selectedType : true) &&
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sortOrder === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === "rating") {
        return b.rating - a.rating;
      }
      return 0;
    });

  return (
    <div className="mt-5 pt-5">
      <Container className="text-white text-center">
        <h2 className="text-center mb-5 display-4">Todas las Películas</h2>

        <Row className="mb-4">
          <Col md="4">
            <FormGroup>
              <Label for="movieType">Tipo de película</Label>
              <Input
                type="select"
                name="movieType"
                id="movieType"
                onChange={handleFilterChange}
                value={selectedType}
              >
                <option value="">Todos</option>
                <option value="accion">Acción</option>
                <option value="animacion">Animación</option>
                <option value="comedia">Comedia</option>
                <option value="terror">Terror</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label for="search">Buscar por título</Label>
              <Input
                type="text"
                name="search"
                id="search"
                placeholder="Buscar..."
                onChange={handleSearchChange}
                value={searchTerm}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label for="sortOrder">Ordenar por</Label>
              <Input
                type="select"
                name="sortOrder"
                id="sortOrder"
                onChange={handleSortChange}
                value={sortOrder}
              >
                <option value="title">Título</option>
                <option value="rating">Calificación</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          {filteredMovies.map((movie) => (
            <Col key={movie.id} sm="12" md="6" lg="4" className="mb-4">
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllMovies;

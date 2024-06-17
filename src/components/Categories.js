import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Categories = () => {
  const categories = [
    { id: "accion", name: "Acción" },
    { id: "animacion", name: "Animación" },
    { id: "comedia", name: "Comedia" },
    { id: "terror", name: "Terror" },
  ];
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/all-movies?category=${category.id.toLowerCase()}`);
  };

  return (
    <Container className="text-white text-center my-5">
      <Row>
        {categories.map((category) => (
          <Col key={category} sm="12" md="6" lg="3" className="mb-4">
            <button
              onClick={() => handleCategoryClick(category)}
              className="btn btn-outline-light w-100"
            >
              {category.name}
            </button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;

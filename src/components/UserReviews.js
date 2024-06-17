// src/components/UserReviews.js
import React from "react";
import { Container, Row, Col } from "reactstrap";

const reviews = [
  {
    id: 1,
    user: "Usuario 1",
    text: "Excelente película, me encantó!",
  },
  {
    id: 2,
    user: "Usuario 2",
    text: "Buena, pero podría mejorar en algunos aspectos.",
  },
  {
    id: 3,
    user: "Usuario 3",
    text: "No me gustó, esperaba más.",
  },
];

const UserReviews = () => {
  return (
    <Container className="text-center text-white my-5">
      <h2 className="mb-4">Reseñas de Usuarios</h2>
      <Row>
        {reviews.map((review) => (
          <Col key={review.id} sm="12" md="4" className="mb-4">
            <div className="p-3 bg-dark rounded">
              <h5>{review.user}</h5>
              <p>{review.text}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserReviews;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AllMovies from "./pages/AllMovies";
import Reservation from "./pages/Reservation";
import MovieReviews from "./pages/MovieReviews";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavigationMenu />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-movies" element={<AllMovies />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reviews" element={<MovieReviews />} />
          <Route path="/creditos" element={<MovieReviews />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

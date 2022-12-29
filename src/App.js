import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Projects from "./components/routes/Projects";

function App() {
  return (
    <Router>
      <header
        className="relative
    w-full
    flex flex-wrap
    items-center
    justify-end
    focus:text-gray-700
    shadow-lg
    navbar navbar-expand-lg "
      >
        <Link to="/" className="m-4 hover:text-gray-700">
          Home
        </Link>
        <Link to="/About" className="m-4 hover:text-gray-700">
          About
        </Link>
        <Link to="/Projects" className="m-4 hover:text-gray-700">
          Projects
        </Link>
      </header>
      <main className=" flex items-center justify-center h-screen">
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="Projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

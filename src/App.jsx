import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "../pages/home";
import About from "../pages/about";
import Team from "../pages/team";
import Partners from "../pages/partners";
import Blog from "../pages/blog";
import Event from "../pages/event";
import "./App.css";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="partners" element={<Partners />} />
        <Route path="blog" element={<Blog />} />
        <Route path="event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;

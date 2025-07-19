import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/About";
import ServicesPage from "./Pages/Services";
// import GalleryPage from "./Pages/Gallery";
// import AboutPage from "./Pages/About";
// import ContactPage from "./Pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
};

export default App;

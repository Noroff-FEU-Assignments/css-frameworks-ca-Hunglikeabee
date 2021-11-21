import React from "react";
import { ThemeProvider } from "styled-components";
import "./sass/styles.scss";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./components/footer/Footer";

const theme = {
  primaryColour: "#E92569",
  secondaryColour: "#767676",
  backgroundColour: "#707070",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

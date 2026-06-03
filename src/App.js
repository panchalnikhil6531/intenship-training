import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Register from "./Register";
import ApiCalling from "./ApiCalling";
import Home from "./home";
import "./App.css";

function About() {
  return (
    <div className="container">
      <h1>About Page</h1>
    </div>
  );
}

function Contact() {
  return (
    <div className="container">
      <h1>Contact Page</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<ApiCalling />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
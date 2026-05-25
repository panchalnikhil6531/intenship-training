import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Register from "./Register";
import "./App.css";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Home Page</h1>
    </div>
  );
}

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

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
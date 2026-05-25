import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
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

function Register() {
  return (
    <div className="container">
      <h1>Register Page</h1>
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
        <Route path="/Register" element={<Register />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
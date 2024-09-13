import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import About from "./Pages/About";
import Mine from "./Pages/Mine";
import OpenSource from "./Pages/OpenSource";
import Footer from "./Pages/Footer";

export default function App() {
  return (
    <div className="bg-gray-800">
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="projects" element={<Projects />} />
        <Route path="/opensource" element={<OpenSource />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Mine />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      <Home />
    </div>
  );
}
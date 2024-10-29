import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects.js';
import Experience from './pages/Experience.js';
import Navbar from './components/navbar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Experience" element={<Experience />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects.js';
import Experience from './pages/Experience.js';
import Navbar from './components/navbar.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/Projects" element={<Projects />}/>
          <Route path = "/experience" element={<Experience />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

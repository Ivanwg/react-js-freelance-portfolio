import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';

import Navbar from './сomponents/navbar/Navbar';
import Footer from './сomponents/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './utils/scollToTop';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/project/:slug' element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

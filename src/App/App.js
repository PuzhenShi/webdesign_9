
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Jobs from '../pages/Jobs';
import Contact from '../pages/Contact';
import './App.css';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Card from './JobsGal/Card';


//<script type="text/javascript"src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/jobs' element={<Jobs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

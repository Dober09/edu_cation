import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>this is the about component</h1>} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

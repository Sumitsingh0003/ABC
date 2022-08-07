import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Counters from './Counters';
import Contact from './Contact';
import Toggle from './Toggle';
import Accordian from './Accordian';
import Accordians from './Accordians';
import Tabs from './Tabs';
import Proptabs from './Proptabs';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/counters" element={<Counters />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/toggle" element={<Toggle />}/>
          <Route path="/accordian" element={<Accordian />}/>
          <Route path="/accordians" element={<Accordians />}/>
          <Route path="/tabs" element={<Tabs />}/>
          <Route path="/proptabs" element={<Proptabs />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import { Routes,Route} from 'react-router-dom';
import './App.scss'
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
function App(){
  return(
  <div className='app'>
    <Navbar />
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
      </Routes>
    <Footer />
  </div>
  )
}
export default App;
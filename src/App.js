
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Projects from './component/Projects';
import Navbar from './component/Navbar';
import Certificates from './component/Certificates';
import About from './component/About';
import Skills from './component/Skills';
import { ContactUs } from './component/ContactUs';


function App() {
  return (
   <div >
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/certificates' element={<Certificates/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>
    </Routes>
  
    </div>
  );
}

export default App;

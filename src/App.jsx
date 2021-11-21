import './app.scss';
import { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
// import { routes, route } from 'react-router-dom';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <Topbar open={menuOpen} setOpen={setMenuOpen} />
      <Menu open={menuOpen} setOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
        {/* <routes>
          <route path='/' element={<Intro />} />
          <route path='/portfolio' element={<Portfolio />} />
          <route path='/works' element={<Works />} />
          <route path='/testimonials' element={<Testimonials />} />
          <route path='/contact' element={<Contact />} />
        </routes> */}
      </div>
    </div>
  );
}

export default App;

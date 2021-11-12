import './app.scss';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
// import { routes, route } from 'react-router-dom';
function App() {
  return (
    <div className='app'>
      <Topbar />

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

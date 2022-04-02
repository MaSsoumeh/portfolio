import "./app.scss";
import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Skills from "./components/skills/Skills";
// import { routes, route } from 'react-router-dom';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section className="sections">
        <Intro menuOpen={menuOpen} />
        <Skills />
        <Works />
        <Testimonials />
        <Contact />
        {/* <routes>
          <route path='/' element={<Intro />} />
          <route path='/works' element={<works />} />
          <route path='/works' element={<Works />} />
          <route path='/testimonials' element={<Testimonials />} />
          <route path='/contact' element={<Contact />} />
        </routes> */}
      </section>
    </div>
  );
}

export default App;

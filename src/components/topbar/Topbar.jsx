import "./topbar.scss";
import { Call, Mail, GitHub } from "@material-ui/icons";

const Topbar = (props) => {
  const { menuOpen, setMenuOpen } = props;
  return (
    <header className={"topbar " + (menuOpen && "active")}>
      <nav className="wrapper">
        <div className="left">
          <a href="#intro" className={"logo " + (menuOpen && "activeLogo")}>
            <h1>Masoumeh Zarei.</h1>
          </a>

          <div className="itemContainer">
            <Call className="icon" />
            <span>+98 919 732 9604</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>
              <a
                className={"link " + (menuOpen && "activeLink")}
                href="mailto:zarei.massoumeh@gmail.com"
              >
                zarei.massoumeh@gmail.com
              </a>
            </span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <span>
              <a
                className={"link " + (menuOpen && "activeLink")}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MaSsoumeh"
              >
                MaSsoumeh
              </a>
            </span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;

import "./intro.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useEffect, useRef } from "react";
import { init } from "ityped";

const Intro = ({ menuOpen }) => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 2000,
      showCursor: false,
      backSpeed: 60,
      strings: [
        " Javascript",
        " Reactjs",
        " Nextjs",
        " HTML",
        " CSS",
        " MaterialUI",
        " SASS",
      ],
    });
  }, []);

  return (
    <>
      <article className="intro" id="intro">
        <div className="left">
          <figure className={"imgContainer " + (menuOpen && "activeContainer")}>
            <img src="assets/profile-img-1.png" alt="User profile" />
            {/* <div>
              <p>Dreams can come true,</p>
              <p>but you need to be courageous to pursue them</p>
            </div> */}
          </figure>
        </div>
        <div className="right">
          <span className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Masoumeh Zarei</h1>
            <h3>Frontend Developer</h3>
            <span ref={textRef}></span>
          </span>
          <a href="#works">
            <ExpandMoreIcon className="arrowIcon" />
          </a>
        </div>
      </article>
    </>
  );
};

export default Intro;

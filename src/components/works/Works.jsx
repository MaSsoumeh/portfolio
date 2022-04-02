import "./works.scss";
import { webApp } from "../../data/worksData";
import { useEffect } from "react";
import gsap from "gsap";

const Works = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo("#img1", { y: -500 }, { y: 0 }).fromTo(
      "#img2",
      { y: -500 },
      { y: 0 }
    );
  });
  return (
    <>
      <article className="works" id="works">
        <h1>works</h1>

        <section className="container">
          {webApp.map((item) => (
            <figure key={item.id} className="item">
              <img src={item.src} alt={item.alt} />
              <h3>{item.title}</h3>
            </figure>
          ))}
        </section>
      </article>
    </>
  );
};

export default Works;

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./menu.scss";

const menuItems = [
  {
    title: "Home",
    hrefVal: "#intro",
    id: "item1",
  },
  {
    title: "My Skills",
    hrefVal: "#skills",
    id: "item2",
  },
  {
    title: "Works",
    hrefVal: "#works",
    id: "item3",
  },
  {
    title: "Testimonials",
    hrefVal: "#testimonials",
    id: "item4",
  },
  {
    title: "Contact",
    hrefVal: "#contact",
    id: "item5",
  },
];
const Menu = (props) => {
  const parentEl = useRef();

  const { menuOpen, setMenuOpen } = props;
  const clickHandler = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    let tl = gsap.timeline();
    menuOpen &&
      tl
        .fromTo("#item1", { x: -170 }, { x: 0 })
        .fromTo("#item2", { x: -170 }, { x: 0 })
        .fromTo("#item3", { x: -170 }, { x: 0 })
        .fromTo("#item4", { x: -170 }, { x: 0 })
        .fromTo("#item5", { x: -170 }, { x: 0 });
  }, [menuOpen]);
  return (
    <section className={"menu " + (menuOpen && "active")}>
      <nav className="nav" ref={parentEl}>
        <ul>
          {menuItems.map((item) => {
            return (
              <li
                id={item.id}
                className="menuItem"
                key={item.title}
                onClick={clickHandler}
              >
                <a href={item.hrefVal}>{item.title}</a>
                <hr className="hLine"></hr>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
export default Menu;

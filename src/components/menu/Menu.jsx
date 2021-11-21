import './menu.scss';

const Menu = (props) => {
  const { open, setOpen } = props;
  const clickHandler = () => {
    setOpen(false);
  };
  return (
    <header className={'menu ' + (open && 'active')}>
      <nav className='nav'>
        <ul>
          <li onClick={clickHandler}>
            <a href='#intro'>Home</a>
          </li>
          <li onClick={clickHandler}>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li onClick={clickHandler}>
            <a href='#works'>Works</a>
          </li>
          <li onClick={clickHandler}>
            <a href='#testimonials'>Testimonials</a>
          </li>
          <li onClick={clickHandler}>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Menu;

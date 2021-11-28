import { Link } from 'react-router-dom';
import './topbar.scss';
import logo from '../../images/logo.svg';
import { Person, Mail, GitHub } from '@material-ui/icons';
// import GitHubIcon from '@mui/icons-material/GitHub';

const Topbar = (props) => {
  const { open, setOpen } = props;
  return (
    <header className={'topbar ' + (open && 'active')}>
      <nav className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            <img className='logo-image' src={logo} alt='logo' />
          </a>
          <a href='#intro' className='logo'>
            <h1 className='title'>Portfolio</h1>
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+98 919 732 9604</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>zarei.massoumeh@gmail.com</span>
          </div>
          <div className='itemContainer'>
            <GitHub className='icon' />
            <span>
              <a href='https://github.com/MaSsoumeh'>MaSsoumeh</a>
            </span>
          </div>
        </div>

        <div className='right'>
          <div className='hamburger' onClick={() => setOpen(!open)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;

import { NavLink } from 'react-router-dom';
import DarkModeBtn from '../darkModeBtn/DarkModeBtn';
import './style.css';



function Navbar() {
  const activeClassName = 'nav-list__link nav-list__link--active';
  const normalClassName = 'nav-list__link';
  
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav-row'>
          <NavLink to='/' className='logo'>
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <DarkModeBtn />

          <ul className='nav-list'>
            <li className='nav-list__item'>
              <NavLink to='/' className={({isActive}) => isActive ? activeClassName : normalClassName}>
                Home
              </NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink to='/projects' className={({isActive}) => isActive ? activeClassName : normalClassName}>
                Projects
              </NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink to='/contacts' className={({isActive}) => isActive ? activeClassName : normalClassName}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
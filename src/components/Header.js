import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header>
    <div className="logo-container">
      <h1>Math Magicians</h1>
    </div>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        {' | '}
        <li><NavLink to="/calculator">Calculator</NavLink></li>
        {' | '}
        <li><NavLink to="/quote">Quote</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;

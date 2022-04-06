import { NavLink } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <div className="links">
      <NavLink data-testid="problem-1-link" to="/problem-1">
        Problem 1
      </NavLink>
      <NavLink to="/problem-2">Problem 2</NavLink>
      <NavLink to="/problem-3">Problem 3</NavLink>
    </div>
  );
}

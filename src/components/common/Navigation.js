import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <ul className="nav">
      <li>
        <Link
          to="/"
          className={`nav__item ${isActive("/") && "nav__item--active"}`}
        >
          Home
        </Link>
      </li>
      <li>
        <a className="nav__item" href="/">
          About
        </a>
      </li>
      <li>
        <a className="nav__item" href="/">
          Blog
        </a>
      </li>
      <li>
        <a className="nav__item" href="/">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;

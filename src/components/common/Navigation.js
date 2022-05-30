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
        <Link
          to="/about"
          className={`nav__item ${isActive("/about") && "nav__item--active"}`}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/blog"
          className={`nav__item ${isActive("/blog") && "nav__item--active"}`}
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={`nav__item ${isActive("/contact") && "nav__item--active"}`}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;

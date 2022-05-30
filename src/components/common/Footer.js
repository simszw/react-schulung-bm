import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid--columns-3">
        <div className="x">
          <Logo />
          <ul className="footer__list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
          </ul>
        </div>
        <ul className="footer__list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
        </ul>
        <ul className="footer__list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

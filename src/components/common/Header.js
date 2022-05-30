import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <Navigation />
      <p>Button</p>
    </header>
  );
}

export default Header;

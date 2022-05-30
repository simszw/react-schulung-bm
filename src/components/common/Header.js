import Logo from "./Logo";

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <p>Navigation</p>
      <p>Button</p>
    </header>
  );
}

export default Header;

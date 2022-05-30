import Button from "../ui/Button";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <Navigation />
      <Button />
    </header>
  );
}

export default Header;

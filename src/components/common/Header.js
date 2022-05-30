import { useContext } from "react";
import { userContext } from "../../context/userContext";
import Button from "../ui/Button";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header(props) {
  const { user, setAuthenticated } = useContext(userContext);
  const { username, email, authenticated } = user;
  const handleLogin = () => setAuthenticated(true);
  const handleLogout = () => setAuthenticated(false);
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <Navigation />
      {authenticated ? (
        <div className="user-container">
          <div className="user-details">
            <div className="user-name">{username}</div>
            <div className="user-email">{email}</div>
          </div>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )}
    </header>
  );
}

export default Header;

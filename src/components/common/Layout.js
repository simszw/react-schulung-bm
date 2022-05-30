import { Outlet } from "react-router-dom";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </div>
  );
}

export default Layout;

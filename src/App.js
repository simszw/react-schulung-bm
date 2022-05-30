import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./components/routes/Home";
import ErrorPage from "./components/routes/ErrorPage";
import About from "./components/routes/About";
import Blog from "./components/routes/Blog";
import Contact from "./components/routes/Contact";
import { userContext } from "./context/userContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    username: "Max Mustermann",
    email: "max@mustermann.de",
    authenticated: false,
  });

  const setAuthenticated = (isAuthenticated) => {
    setUser({
      ...user,
      authenticated: isAuthenticated,
    });
  };

  return (
    <div className="App">
      <userContext.Provider value={{ user, setAuthenticated }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;

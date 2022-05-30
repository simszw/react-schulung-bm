import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./components/routes/Home";
import ErrorPage from "./components/routes/ErrorPage";
import About from "./components/routes/About";
import Blog from "./components/routes/Blog";
import Contact from "./components/routes/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

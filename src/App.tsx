import { Route, Routes } from "react-router-dom";
import ThemeChooser from "./components/ThemeChooser";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* HOME: About */}
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="hobbies" element={<Hobbies />} />
          {/* Not Found */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Recipes from "../pages/Recipes";
import ContentCreation from "../pages/ContentCreation";
import Library from "../pages/Library";
import Sandbox from "../pages/Sandbox";

const AppRouter: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="content-creation" element={<ContentCreation />} />
        <Route path="library" element={<Library />} />
        <Route path="sandbox" element={<Sandbox />} />
      </Routes>
    </div>
  );
};

export default AppRouter;

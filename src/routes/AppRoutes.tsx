import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Properties from "../pages/Properties";
import PropertyDetails from "../pages/PropertyDetails";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* PROPERTIES */}
        <Route path="/properties" element={<Properties />} />

        {/* PROPERTY DETAILS */}
        <Route path="/properties/:slug" element={<PropertyDetails />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

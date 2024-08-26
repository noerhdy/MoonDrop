import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import MainPage from "../../pages/home/MainPage";
import ProductPage from "../../pages/product/ProductPage";
import AboutPage from "../../pages/AboutUs/AboutPage";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<MainPage />}>
          <Route path="product" element={<ProductPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesConfig;

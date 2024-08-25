import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "../../pages/product/ProductPage";
import HomePage from "../../pages/home/HomePage";
import MainPage from "../../pages/home/MainPage";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<MainPage />}>
          <Route path="product" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesConfig;

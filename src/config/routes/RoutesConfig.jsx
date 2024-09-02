import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import MainPage from "../../pages/home/MainPage";
import ProductPage from "../../pages/product/ProductPage";
import AboutPage from "../../pages/AboutUs/AboutPage";
import CartPage from "../../pages/Cart/CartPage";
import { SkeletonTheme } from "react-loading-skeleton";

const RoutesConfig = () => {
  return (
    <>
      <SkeletonTheme baseColor="#000" highlightColor="#525252">
        <Router>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<MainPage />}>
              <Route path="product" element={<ProductPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="cart" element={<CartPage />} />
            </Route>
          </Routes>
        </Router>
      </SkeletonTheme>
    </>
  );
};

export default RoutesConfig;

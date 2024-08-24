import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;

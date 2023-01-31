import { Route, Routes } from "react-router-dom";
import { HOME } from "./ROUTES_CONSTANT";

import Home from "../pages/Home/Home";

const RoutesConfig = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path={HOME} element={<Home />} />
    </Routes>
  );
};

export default RoutesConfig;

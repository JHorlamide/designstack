import { Route, Routes } from "react-router-dom";
import { HOME, PERSONAL_INFORMATION } from "./ROUTES_CONSTANT";

import Home from "../pages/Home/Home";
import PersonalInformation from "../pages/Admin/PersonalInformation/PersonalInformation";

const RoutesConfig = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path={HOME} element={<Home />} />

      {/* Private Route */}
      <Route path={PERSONAL_INFORMATION} element={<PersonalInformation />} />
    </Routes>
  );
};

export default RoutesConfig;

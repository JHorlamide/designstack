import { Route, Routes } from "react-router-dom";
import {
  HOME,
  PERSONAL_INFORMATION,
  CHANGE_PASSWORD,
  MEMBERSHIP_SETTINGS,
  LOGIN
} from "./ROUTES_CONSTANT";

import Home from "../pages/Home/Home";
import PersonalInformation from "../pages/Admin/PersonalInformation/PersonalInformation";
import LoginAndPassword from "../pages/Admin/LoginAndPassword/LoginAndPassword";
import MembershipSettings from "../pages/Admin/MembershipSettings/MembershipSettings";
import Login from "../pages/Auth/Login/Login";

const RoutesConfig = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path={HOME} element={<Home />} />
      <Route path={LOGIN} element={<Login /> } />

      {/* Private Route */}
      <Route path={PERSONAL_INFORMATION} element={<PersonalInformation />} />
      <Route path={CHANGE_PASSWORD} element={<LoginAndPassword />} />
      <Route path={MEMBERSHIP_SETTINGS} element={<MembershipSettings />} />
    </Routes>
  );
};

export default RoutesConfig;

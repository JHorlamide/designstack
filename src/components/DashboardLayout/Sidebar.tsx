import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CustomBtn from "../CustomBtn/CustomBtn";
import {
  LOGOUT,
  PERSONAL_INFORMATION,
  CHANGE_PASSWORD,
  MEMBERSHIP_SETTINGS,
  LOGIN,
} from "../../routes/ROUTES_CONSTANT";
import AuthContext, { AuthContextType } from "../../context/AuthProvider";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const routes = [
  {
    id: 1,
    path: PERSONAL_INFORMATION,
    title: "Personal Information",
    icon: "/personal_info.svg",
  },
  {
    id: 2,
    path: CHANGE_PASSWORD,
    title: "Login & Password",
    icon: "/login_pass.svg",
  },
  {
    id: 3,
    path: MEMBERSHIP_SETTINGS,
    title: "Membership Settings",
    icon: "/membership_settings.svg",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const { authUser, logOutUser } = React.useContext(
    AuthContext
  ) as AuthContextType;

  const logOut = () => {
    logOutUser();
    localStorage.removeItem("_token");
    localStorage.removeItem("_refreshToken");
    navigate(LOGIN);
  };

  return (
    <div className="w-full flex flex-col space-y-8">
      <div className="bg-white flex flex-col rounded-md">
        <div className="border-b-[1px] border-b-gray py-4 px-3">
          <h1 className="text-sm font-bold">Account</h1>
        </div>

        <div className="flex flex-col">
          {routes.map((route) => (
            <NavLink
              key={route.id}
              to={route.path}
              className={({ isActive }) =>
                classNames(
                  isActive
                    ? "flex space-x-3 py-3 px-3 bg-black border-l-4 border-l-purple text-white"
                    : "flex space-x-3 py-3 px-3 text-black"
                )
              }
            >
              <img src={route.icon} alt="" className="w-[28px] h-[28px]" />
              <p className="text-sm">{route.title}</p>
            </NavLink>
          ))}

          <NavLink
            to={LOGIN}
            onClick={logOut}
            className={({ isActive }) =>
              classNames(
                isActive
                  ? "flex space-x-3 py-3 px-3 bg-black border-l-4 border-l-purple text-white"
                  : "flex space-x-3 py-3 px-3 text-black"
              )
            }
          >
            <img src={"/logout.svg"} alt="" className="w-[28px] h-[28px]" />
            <p className="text-sm">Logout</p>
          </NavLink>
        </div>
      </div>

      <div className="bg-white flex flex-col rounded-md">
        <div className="border-b-[1px] border-b-gray py-4 px-3">
          <h1 className="text-sm font-bold capitalize">payment method</h1>
        </div>

        <div className="flex flex-col space-y-3 px-5 py-3">
          <div className="flex items-center space-x-5">
            <div className="">
              <img src="/bank_logo.png" alt="" />
            </div>

            <div className="flex flex-col space-y-0.5">
              <p className="">Bank of America</p>
              <small>**** _ 9966</small>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="">
              <img src="/master_card.png" alt="" />
            </div>

            <div className="flex flex-col space-y-0.5">
              <p className="">Mastercard</p>
              <small>**** _ 2478</small>
            </div>
          </div>
        </div>

        <div className="border-t border-b-light-gray py-4 px-3">
          <CustomBtn
            leftIcon={<img src="/plus_icon.png" className="pr-2" />}
            className="flex items-center justify-between capitalize px-4"
          >
            add payment method
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

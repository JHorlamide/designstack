import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import AuthContext, { AuthContextType } from "../../context/AuthProvider";
import {
  LOGOUT,
  PERSONAL_INFORMATION,
  LOGIN,
} from "../../routes/ROUTES_CONSTANT";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { authUser, logOutUser } = React.useContext(
    AuthContext
  ) as AuthContextType;
  const [avatar, setAvatar] = useState("");

  const logOut = () => {
    logOutUser();
    localStorage.removeItem("_token");
    localStorage.removeItem("_refreshToken");
    navigate(LOGIN);
  };

  useEffect(() => {
    if (authUser && authUser.user) {
      setAvatar(authUser.user.avatar.imageUrl);
    }
  }, []);

  return (
    <div className="py-4 px-7">
      <div className="flex justify-between">
        <div className="w-[238.68px] h-[38.33px]">
          <img src="/logo.png" alt="logo" className="w-full h-full" />
        </div>

        <div className="flex space-x-4">
          <Link to="/trello" className="w-[311px] h-[43px]">
            <img src="/trello.png" alt="trello" className="w-full h-full" />
          </Link>

          <div className="flex space-x-3">
            <div className="">
              <img
                src="/alarm.svg"
                alt="alarm-icon"
                className="w-full h-full"
              />
            </div>

            <div className="top-16 text-right">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center">
                    <div className="flex space-x-2 items-center">
                      <img
                        src={avatar}
                        alt=""
                        className="rounded-full w-14 h-12"
                      />
                      {/* <img
                        src="/admin_avatar.png"
                        alt="user-avatar"
                        className="w-16 h-10"
                      /> */}

                      <img
                        src="/arrow_down.svg"
                        alt="arrow-down"
                        className="w-full h-full"
                      />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-light-gray rounded-md bg-white shadow-lg ring-1 ring-light-gray ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <div className="flex space-x-2 px-2 items-center">
                            <img
                              src={"/personal_info.svg"}
                              alt=""
                              className="w-[28px] h-[28px]"
                            />
                            <Link
                              to={PERSONAL_INFORMATION}
                              className={`${
                                active ? "text-black" : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Personal Information
                            </Link>
                          </div>
                        )}
                      </Menu.Item>
                    </div>

                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <div className="flex space-x-2 px-2 items-center">
                            <img
                              src={"/logout.svg"}
                              alt=""
                              className="w-[28px] h-[28px]"
                            />
                            <button
                              onClick={logOut}
                              className={`${
                                active ? "text-black" : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Logout
                            </button>
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;

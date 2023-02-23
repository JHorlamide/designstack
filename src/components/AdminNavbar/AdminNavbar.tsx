import React from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const AdminNavbar = () => {
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
                        src="/admin_avatar.png"
                        alt="user-avatar"
                        className="w-16 h-10"
                      />

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
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "text-black" : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Profile
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "text-black" : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Archive
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "text-black" : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Logout
                          </button>
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

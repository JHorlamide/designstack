import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CustomBtn from "../CustomBtn/CustomBtn";
import {
  PERSONAL_INFORMATION,
  CHANGE_PASSWORD,
  MEMBERSHIP_SETTINGS,
} from "../../routes/ROUTES_CONSTANT";
import SubContext, {
  IAuthorization,
  SubContextType,
} from "../../context/SubscriptionProvider";
import useHandleSub from "../../hooks/useHandleSub";
import CheckoutModal from "../MembershipPlan/CheckoutModal";

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
  const { userSubscription } = React.useContext(SubContext) as SubContextType;
  const [authorization, setAuthorization] = useState<IAuthorization[]>();
  const {
    loading,
    actionType,
    checkoutLink,
    openModal,
    setOpenModal,
    handleManageSub,
  } = useHandleSub("addCard");

  useEffect(() => {
    if (userSubscription && userSubscription.subscription) {
      const { authorization } = userSubscription.subscription;
      setAuthorization(authorization);
    }
  });

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Fragment>
      <CheckoutModal
        actionType={actionType}
        isOpen={openModal}
        link={checkoutLink}
        closeModal={closeModal}
      />

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

            {/* <NavLink
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
          </NavLink> */}
          </div>
        </div>

        <div className="bg-white flex flex-col rounded-md">
          <div className="border-b-[1px] border-b-gray py-4 px-3">
            <h1 className="text-sm font-bold capitalize">payment method</h1>
          </div>

          <div className="flex flex-col space-y-3 px-5 py-3">
            {authorization ? (
              authorization.map((bankDetails, idx) => (
                <div key={idx} className="flex space-x-5 items-start">
                  <p className="text-xl font-semibold">
                    {bankDetails.cardType}
                  </p>
                  <div className="flex flex-col space-y-0.5">
                    <p className="">{bankDetails.bank}</p>
                    <small>**** _ {bankDetails.last4}</small>
                  </div>
                </div>
              ))
            ) : (
              <p className="font-semibold">Loading card info...</p>
            )}
          </div>

          <div className="border-t border-b-light-gray py-4 px-3">
            <CustomBtn
              onClick={handleManageSub}
              leftIcon={
                loading ? "" : <img src="/plus_icon.png" className="pr-2" />
              }
              className="flex items-center justify-between capitalize px-4"
            >
              {loading ? "Loading..." : "add payment method"}
            </CustomBtn>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;

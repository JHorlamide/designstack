import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import Media from "react-media";
import Logo from "/src/assets/images/logo.png";
import MenuIcon from "/src/assets/icons/menu.svg";
import CloseMenuIcon from "/src/assets/icons/close_menu.svg";
import NavBarLink from "./NavBarLink/NavBarLink";
import CustomBtn from "../CustomBtn/CustomBtn";
import {
  BENEFITS,
  RECENT_WORK,
  SCOPE_OF_WORK,
  PRICING,
  FAQ,
  LOGIN,
} from "../../routes/ROUTES_CONSTANT";

interface IMenuProps {
  handleToggle: () => void;
}

const routes = [
  {
    id: 1,
    path: BENEFITS,
    title: "Benefits",
  },
  {
    id: 2,
    path: RECENT_WORK,
    title: "recent work",
  },
  {
    id: 3,
    path: SCOPE_OF_WORK,
    title: "scope of work",
  },
  {
    id: 4,
    path: PRICING,
    title: "pricing",
  },
  {
    id: 5,
    path: FAQ,
    title: "faq",
  },
];

const Menu = ({ handleToggle }: IMenuProps) => {
  return (
    <div
      className="lg:hidden flex w-[48px] h-[80px] -mt-2 md:-mt-5"
      onClick={handleToggle}
    >
      <img src={MenuIcon} alt="menu-icon" className="w-full h-full" />
    </div>
  );
};

const CloseMenu = ({ handleToggle }: IMenuProps) => {
  return (
    <div
      className="lg:hidden flex w-[20.22px] h-[17.91px]"
      onClick={handleToggle}
    >
      <img src={CloseMenuIcon} alt="close-icon" />
    </div>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => {
    setShow(!show);
    setToggleMenu(!toggleMenu);
  };

  return (
    <Fragment>
      <nav className="relative overflow-hidden px-5 md:px-16 lg:px-36 md:py-6 w-full h-[96px] flex justify-between lg:justify-start lg:space-x-48 items-center md:items-start">
        <div className="w-[136.16px] md:w-[238.68px] md:h-[38.33px]">
          <img src={Logo} alt="logo" className="object-cover w-full h-full" />
        </div>

        {/* Login button on mobile view */}
        <div className={`lg:hidden ${toggleMenu ? "hidden" : ""}`}>
          <CustomBtn className="border border-gray py-2 px-8 text-lg rounded-sm whitespace-nowrap capitalize">
            login
          </CustomBtn>
        </div>

        <div className="hidden lg:flex space-x-16 items-center">
          <Media query={{ maxWidth: 1189 }}>
            {(matches) =>
              matches ? (
                <div className="ml-52"></div>
              ) : (
                <div className="flex items-center space-x-10">
                  {routes.map(({ id, path, title }) => (
                    <NavBarLink
                      key={id}
                      path={path}
                      title={title}
                      className="capitalize whitespace-nowrap text-lg"
                      activeClassName="font-bold"
                    />
                  ))}
                </div>
              )
            }
          </Media>

          <NavBarLink
            path={LOGIN}
            title="Login"
            className="capitalize font-semibold border border-white bg-white opacity-50 text-light-black rounded-sm py-3 px-10 whitespace-nowrap"
            activeClassName="font-bold"
          />
        </div>

        {toggleMenu ? (
          <Menu handleToggle={handleToggle} />
        ) : (
          <CloseMenu handleToggle={handleToggle} />
        )}
      </nav>

      {/* Mobile Nav */}
      <nav className="lg:hidden absolute w-full bg-white">
        <div className={`${toggleMenu ? "hidden" : ""} z-10 shadow-lg`}>
          <Transition
            show={show}
            enter="transform transition ease-in-out duration-2000"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transform transition ease-in-out duration-2000"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div className="w-full h-[686px] px-5 py-8 flex flex-col space-y-10">
              <div className="flex flex-col space-y-6">
                {routes.map((route) => (
                  <NavBarLink
                    key={route.id}
                    path={route.path}
                    title={route.title}
                    className="capitalize text-gray text-sm"
                    activeClassName="rounded-[10px] py-2.5 px-2 bg-light-gray font-bold"
                  />
                ))}
              </div>
            </div>
          </Transition>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;

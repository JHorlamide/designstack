import { NavLink } from "react-router-dom";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface NavLinkProps {
  path: string;
  title: string;
  className: string;
  activeClassName: string;
}

const NavBarLink = ({ path, title, className, activeClassName }: NavLinkProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        classNames(`${className}`, isActive ? activeClassName : "")
      }
    >
      {title}
    </NavLink>
  );
};

export default NavBarLink;
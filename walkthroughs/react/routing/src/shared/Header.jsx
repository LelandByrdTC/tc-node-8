import { NavLink } from "react-router-dom";
import { routes } from "../data/routes";

export const Header = () => {
  return (
    <header className="container-fluid bg-secondary p-2">
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          {routes.map((route, idx) => {
            if (route.isNavLink)
              return (
                <li key={idx} className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link text-light ${
                        isActive ? "active text-dark" : ""
                      }`
                    }
                    to={route.path}
                  >
                    {route.title}
                  </NavLink>
                </li>
              );
            else return null;
          })}
        </ul>
      </nav>
    </header>
  );
};

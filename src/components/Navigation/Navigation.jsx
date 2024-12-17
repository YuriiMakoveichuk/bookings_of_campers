import clsx from "clsx";

import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container.jsx";

import logo from "../../img/logo.svg";

import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <header className={css.header}>
        <Container>
          <div className={css.box}>
            <img src={logo} alt="logo" />
            <nav className={css.nav}>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/catalog"
              >
                Catalog
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Navigation;

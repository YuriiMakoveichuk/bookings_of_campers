import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";
import { Container } from "../Container/Container.jsx";

const Navigation = () => {
  return (
    <>
      <header className={css.header}>
        <Container>
          <div className={css.box}>
            <img src="./src/img/Logo.svg" alt="logo" />
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

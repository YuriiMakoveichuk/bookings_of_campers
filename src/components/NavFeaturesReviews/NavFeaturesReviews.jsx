import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./NavFeaturesReviews.module.css";

const NavFeaturesReviews = () => {
  return (
    <>
      <div>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="features"
          >
            Features
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="reviews"
          >
            Reviews
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default NavFeaturesReviews;

import { Link } from "react-router-dom";
import css from "./Button.module.css";

export const Button = ({ to, children, target }) => {
  return (
    <Link to={to} className={css.link} target={target}>
      {children}
    </Link>
  );
};

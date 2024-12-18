import { Link } from "react-router-dom";
import css from "./Button.module.css";

export const Button = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      {children}
    </Link>
  );
};

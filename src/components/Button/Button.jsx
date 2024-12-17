import { Link } from "react-router-dom";
import css from "./Button.module.css";

export const Button = ({ linkRef, children }) => {
  return (
    <Link to={linkRef} className={css.link}>
      {children}
    </Link>
  );
};

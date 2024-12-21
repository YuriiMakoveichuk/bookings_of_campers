import sprite from "../../assets/img/sprite.svg";

import css from "./Checkbox.module.css";

export const Checkbox = ({ id, icon, label, value }) => {
  return (
    <div className={css.customCheckbox}>
      <input type="checkbox" id={id} value={value} name={name} />
      <label htmlFor={id}>
        <svg className={css.svg} width={32} height={32}>
          <use href={`${sprite}#${icon}`}></use>
        </svg>
        <p>{label}</p>
      </label>
    </div>
  );
};

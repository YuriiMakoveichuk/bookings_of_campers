import sprite from "../../assets/img/sprite.svg";

import css from "./Checkbox.module.css";

const Checkbox = ({ label, checked, onChange, name, icon }) => {
  return (
    <div className={css.customCheckbox}>
      <input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <label htmlFor={name}>
        <svg className={css.svg} width={32} height={32}>
          <use href={`${sprite}#${icon}`}></use>
        </svg>
        <p>{label}</p>
      </label>
    </div>
  );
};

export default Checkbox;

import clsx from "clsx";

import { Checkbox } from "../Checkbox/Checkbox.jsx";

import sprite from "../../assets/img/sprite.svg";

import css from "./FiltersForm.module.css";

const FiltersForm = () => {
  return (
    <>
      <form className={css.box}>
        <label className={css.label}>
          Location
          <div className={css.boxInput}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#icon-map`}></use>
            </svg>
            <input className={css.input} type="text" placeholder="City" />
          </div>
        </label>
        <p className={css.textForm}>Filters</p>
        <h2 className={css.titleForm}>Vehicle equipment</h2>
        <div className={css.line}></div>

        <div className={css.customCheckboxes}>
          <Checkbox id={"checkbox1"} icon={"icon-wind"} label={"AC"} />
          <Checkbox
            id={"checkbox2"}
            icon={"icon-diagram"}
            label={"Automatic"}
          />
          <Checkbox id={"checkbox3"} icon={"icon-fuel"} label={"Petrol"} />
          <Checkbox id={"checkbox4"} icon={"icon-cup-hot"} label={"Kitchen"} />
          <Checkbox id={"checkbox5"} icon={"icon-tv"} label={"TV"} />
          <Checkbox
            id={"checkbox6"}
            icon={"icon-ph_shower"}
            label={"Bathroom"}
          />
          <Checkbox id={"checkbox7"} icon={"icon-radios"} label={"Radio"} />
          <Checkbox
            id={"checkbox8"}
            icon={"icon-solar_fridge-outline"}
            label={"Refrigerator"}
          />
          <Checkbox
            id={"checkbox9"}
            icon={"icon-ion_water-outline"}
            label={"Water"}
          />
          <Checkbox id={"checkbox10"} icon={"icon-gas"} label={"Gas"} />
          <Checkbox
            id={"checkbox11"}
            icon={"icon-lucide_microwave"}
            label={"Microwave"}
          />
        </div>

        <h2 className={css.titleForm}>Vehicle type</h2>
        <div className={css.line}></div>

        <div className={clsx(css.customCheckboxes, css.boxCheck)}>
          <Checkbox id={"box1"} icon={"icon-bi_grid-1x2"} label={"Van"} />
          <Checkbox
            id={"box2"}
            icon={"icon-bi_grid"}
            label={"Fully Integrated"}
          />
          <Checkbox
            id={"box3"}
            icon={"icon-bi_grid-3x3-gap"}
            label={"Alcove"}
          />
        </div>
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default FiltersForm;

import clsx from "clsx";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { components } from "react-select";

import { selectCampers } from "../../redux/campers/selectors.js";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/campers/operations.js";
import Checkbox from "../Checkbox/Checkbox.jsx";

import sprite from "../../assets/img/sprite.svg";

import css from "./FiltersForm.module.css";

const customStyles = {
  control: (base) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    border: "none",
    width: "360px",
    borderRadius: "12px",
    padding: "10px",
    backgroundColor: " #f7f7f7",
    boxShadow: "none",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#6c717b",
    fontSize: "16px",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#101828",
    fontSize: "16px",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "4px",
    marginTop: "0px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
  }),
  menuList: (base) => ({
    ...base,
    padding: "0",
  }),
  option: (base, { isFocused }) => ({
    ...base,
    backgroundColor: isFocused ? "#dadbdf" : "#fff",
    color: "#101828",
    padding: "10px",
    cursor: "pointer",
    "&:active": {
      backgroundColor: "#ddd",
    },
  }),
};

const FiltersForm = () => {
  const dispatch = useDispatch();

  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    AC: false,
    automatic: false,
    petrol: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    radio: false,
    refrigerator: false,
    water: false,
    gas: false,
    microwave: false,
  });
  const [radioCheckbox, setRadioCheckbox] = useState(null);

  const campers = useSelector(selectCampers);

  const locations = campers.items;

  const uniqueCities = new Set();
  const locationsAll = Array.isArray(locations)
    ? locations
        .map((item) => {
          const [country, city] = item.location.split(", ");
          if (!uniqueCities.has(city)) {
            uniqueCities.add(city);
            return { label: `${city}, ${country}`, value: city };
          }
        })
        .filter(Boolean)
    : [];

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleSelectChange = (selectedOption) => {
    setCities([...cities, selectedOption]);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleRadioChange = (name) => {
    setRadioCheckbox(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filtering = {
      location: cities.map((item) => item.label),
      filters: Object.keys(formData).filter((key) => formData[key] === true),
      transmission: radioCheckbox,
    };
    console.log("Filtering:", filtering);
    toast.success("Filtering successful!");
  };

  return (
    <>
      <form className={css.box} onSubmit={handleSubmit}>
        <label className={css.label}>
          Location
          <div className={css.boxInput}>
            <Select
              styles={customStyles}
              placeholder="City"
              options={locationsAll}
              components={{
                Control: ({ children, isFocused, ...props }) => (
                  <components.Control {...props}>
                    <svg
                      className={clsx(css.svg, isFocused && css.svgFocused)}
                      width={20}
                      height={20}
                    >
                      <use href={`${sprite}#icon-map`}></use>
                    </svg>
                    {children}
                  </components.Control>
                ),
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              onChange={handleSelectChange}
            />
          </div>
        </label>
        <p className={css.textForm}>Filters</p>
        <h2 className={css.titleForm}>Vehicle equipment</h2>
        <div className={css.line}></div>

        <div className={css.customCheckboxes}>
          <Checkbox
            type="checkbox"
            id={"checkbox1"}
            icon={"icon-wind"}
            label="AC"
            onChange={handleCheckboxChange}
            checked={formData.AC}
            name="AC"
          />
          <Checkbox
            type="checkbox"
            id={"checkbox2"}
            icon={"icon-diagram"}
            label={"Automatic"}
            onChange={handleCheckboxChange}
            checked={formData.automatic}
            name="automatic"
          />
          <Checkbox
            type="checkbox"
            id={"checkbox3"}
            icon={"icon-fuel"}
            label={"Petrol"}
            onChange={handleCheckboxChange}
            checked={formData.petrol}
            name="petrol"
          />
          <Checkbox
            type="checkbox"
            id={"checkbox4"}
            icon={"icon-cup-hot"}
            label={"Kitchen"}
            onChange={handleCheckboxChange}
            checked={formData.kitchen}
            name="kitchen"
          />
          <Checkbox
            type="checkbox"
            id={"checkbox5"}
            icon={"icon-tv"}
            label={"TV"}
            onChange={handleCheckboxChange}
            checked={formData.TV}
            name="TV"
          />
          <Checkbox
            type="checkbox"
            id={"checkbox6"}
            icon={"icon-ph_shower"}
            label={"Bathroom"}
            onChange={handleCheckboxChange}
            checked={formData.bathroom}
            name="bathroom"
          />
          <Checkbox
            type="checkbox"
            id={"checkbox7"}
            icon={"icon-radios"}
            label={"Radio"}
            onChange={handleCheckboxChange}
            checked={formData.radio}
            name="radio"
          />
          <Checkbox
            type="checkbox"
            id={"checkbox8"}
            icon={"icon-solar_fridge-outline"}
            label={"Refrigerator"}
            onChange={handleCheckboxChange}
            checked={formData.refrigerator}
            name="refrigerator"
          />
          <Checkbox
            type="checkbox"
            id={"checkbox9"}
            icon={"icon-ion_water-outline"}
            label={"Water"}
            onChange={handleCheckboxChange}
            checked={formData.water}
            name="water"
          />
          <Checkbox
            type="checkbox"
            id={"checkbox10"}
            icon={"icon-gas"}
            label={"Gas"}
            onChange={handleCheckboxChange}
            checked={formData.gas}
            name="gas"
          />
          <Checkbox
            type="checkbox"
            id={"checkbox11"}
            icon={"icon-lucide_microwave"}
            label={"Microwave"}
            onChange={handleCheckboxChange}
            checked={formData.microwave}
            name="microwave"
          />
        </div>

        <h2 className={css.titleForm}>Vehicle type</h2>
        <div className={css.line}></div>

        <div className={clsx(css.customCheckboxes, css.boxCheck)}>
          <Checkbox
            type="radio"
            id={"box1"}
            icon={"icon-bi_grid-1x2"}
            label={"Van"}
            onChange={() => handleRadioChange("van")}
            checked={radioCheckbox === "van"}
            name="van"
          />

          <Checkbox
            type="radio"
            id={"box2"}
            icon={"icon-bi_grid"}
            label={"Fully Integrated"}
            onChange={() => handleRadioChange("fullyIntegrated")}
            checked={radioCheckbox === "fullyIntegrated"}
            name="fullyIntegrated"
          />
          <Checkbox
            type="radio"
            id={"box3"}
            icon={"icon-bi_grid-3x3-gap"}
            label={"Alcove"}
            onChange={() => handleRadioChange("alcove")}
            checked={radioCheckbox === "alcove"}
            name="alcove"
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

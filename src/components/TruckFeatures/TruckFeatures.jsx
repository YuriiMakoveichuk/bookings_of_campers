import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { selectCampers } from "../../redux/campers/selectors.js";
import { fetchOneCamper } from "../../redux/campers/operations.js";
import Equipment from "../Equipment/Equipment.jsx";
import FormaBookingReviews from "../FormaBookingReviews/FormaBookingReviews.jsx";

import css from "./TruckFeatures.module.css";

const TruckFeatures = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const camper = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchOneCamper(id));
  }, [id, dispatch]);

  return (
    <>
      <div className={css.box}>
        <div className={css.boxVehicle}>
          <Equipment item={camper} />
          <h2 className={css.title}>Vehicle details</h2>
          <div className={css.line}></div>
          <ul className={css.list}>
            <li className={css.item}>
              <p>Form</p>
              <p>{camper.form}</p>
            </li>
            <li className={css.item}>
              <p>Length</p>
              <p>{camper.length}</p>
            </li>
            <li className={css.item}>
              <p>Width</p>
              <p>{camper.width}</p>
            </li>
            <li className={css.item}>
              <p>Height</p>
              <p>{camper.height}</p>
            </li>
            <li className={css.item}>
              <p>Tank</p>
              <p>{camper.tank}</p>
            </li>
            <li className={css.item}>
              <p>Consumption</p>
              <p>{camper.consumption}</p>
            </li>
          </ul>
        </div>
        <FormaBookingReviews />
      </div>
    </>
  );
};

export default TruckFeatures;

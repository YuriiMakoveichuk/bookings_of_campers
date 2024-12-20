import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { selectCampers } from "../../redux/campers/selectors.js";
import { fetchCampers } from "../../redux/campers/operations.js";
import TruckCard from "../TruckCard/TruckCard.jsx";

import css from "./TrucksList.module.css";

const TrucksList = () => {
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(4);

  const campers = useSelector(selectCampers);

  const campersAll = campers.items;

  const disabled = campers.total;

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      <div>
        <ul className={css.list}>
          {Array.isArray(campersAll) &&
            campersAll.slice(0, visibleCount).map((item) => {
              return (
                <li key={item.id}>
                  <TruckCard item={item} />
                </li>
              );
            })}
        </ul>
        <div className={css.box}>
          {visibleCount < disabled && (
            <button className={css.btn} type="button" onClick={loadMore}>
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TrucksList;

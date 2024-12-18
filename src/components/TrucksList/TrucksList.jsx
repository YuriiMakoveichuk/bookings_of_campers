import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors.js";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/campers/operations.js";

import css from "./TrucksList.module.css";
import TruckCard from "../TruckCard/TruckCard.jsx";

const TrucksList = () => {
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(4);

  const campers = useSelector(selectCampers);
  console.log("campers", campers.items);

  const campersAll = campers.items;

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };
  return (
    <>
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
        {visibleCount && (
          <button className={css.btn} type="button" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default TrucksList;

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectCampers } from "../../redux/campers/selectors.js";
import { fetchCampers } from "../../redux/campers/operations.js";
import TruckCard from "../TruckCard/TruckCard.jsx";
import css from "./TrucksList.module.css";

const TrucksList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [allItems, setAllItems] = useState([]);
  const { items, total } = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers({ page }));
  }, [dispatch, page]);

  useEffect(() => {
    if (items?.length && page === 1) {
      setAllItems(items);
    } else if (items?.length) {
      setAllItems((prevItems) => {
        const newItems = items.filter(
          (item) => !prevItems.some((prevItem) => prevItem.id === item.id)
        );
        return [...prevItems, ...newItems];
      });
    }
  }, [items, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const totalPages = Math.ceil(total / 4);

  return (
    <>
      <div>
        <ul className={css.list}>
          {Array.isArray(allItems) &&
            allItems.map((item) => {
              return (
                <li key={item.id}>
                  <TruckCard item={item} />
                </li>
              );
            })}
        </ul>
        <div className={css.box}>
          {page < totalPages && (
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

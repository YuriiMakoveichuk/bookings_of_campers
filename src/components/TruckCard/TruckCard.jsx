import { Button } from "../Button/Button.jsx";
import Equipment from "../Equipment/Equipment.jsx";

import sprite from "../../assets/img/sprite.svg";

import css from "./TruckCard.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../redux/campers/slice.js";

const TruckCard = ({ item }) => {
  const dispatch = useDispatch();

  const likes = useSelector((state) => state.campers.likes);

  const isLike = likes.includes(item.id);

  const handleFavoriteClick = () => {
    dispatch(toggleLike(item.id));
  };

  const formatLocation = (location) => {
    const [country, city] = location.split(", ");
    return `${city}, ${country}`;
  };
  return (
    <>
      <div className={css.box}>
        <img
          src={item.gallery[0].thumb}
          alt="photo `${item.name}`"
          className={css.img}
        />
        <div>
          <div className={css.boxTitle}>
            <h3 className={css.title}>{item.name}</h3>
            <div className={css.boxPrice}>
              <p>&euro;{item.price}</p>
              <svg
                className={clsx(`${css.svg} ${isLike ? css.like : ""}`)}
                width={24}
                height={24}
                onClick={handleFavoriteClick}
              >
                <use href={`${sprite}#icon-like`}></use>
              </svg>
            </div>
          </div>

          <div className={css.boxRatingLocation}>
            <p className={css.textRatingLocation}>
              <svg className={css.svg} width={16} height={16}>
                <use href={`${sprite}#icon-star-yellow`}></use>
              </svg>
              <span className={css.spanRatingLocation}>
                {item.rating} ({item.reviews.length} Reviews)
              </span>
            </p>
            <p className={css.textRatingLocation}>
              <svg className={css.svg} width={16} height={16}>
                <use href={`${sprite}#icon-map`}></use>
              </svg>
              {formatLocation(item.location)}
            </p>
          </div>

          <p className={css.textDescription}>{item.description}</p>

          <Equipment item={item} />

          <Button to={`/catalog/${item.id}/features`} target={"_blank"}>
            Show more
          </Button>
        </div>
      </div>
    </>
  );
};

export default TruckCard;

// import { useDispatch, useSelector } from "react-redux";
// // import { toggleFavorite } from "../../redux/campers/campersSlice.js";
// import sprite from "../../assets/img/sprite.svg";
// import css from "./TruckCard.module.css";
// import { toggleFavorite } from "../../redux/campers/slice.js";

// const TruckCard = ({ item }) => {
//   const dispatch = useDispatch();
//   const favorites = useSelector((state) => state.campers.favorites);

//   const isFavorite = favorites.includes(item.id);

//   const handleFavoriteClick = () => {
//     dispatch(toggleFavorite(item.id));
//   };

//   const formatLocation = (location) => {
//     const [country, city] = location.split(", ");
//     return `${city}, ${country}`;
//   };

//   return (
//     <div className={css.box}>
//       <img
//         src={item.gallery[0].thumb}
//         alt={`photo ${item.name}`}
//         className={css.img}
//       />
//       <div>
//         <div className={css.boxTitle}>
//           <h3 className={css.title}>{item.name}</h3>
//           <div className={css.boxPrice}>
//             <p>&euro;{item.price}</p>
//             <svg
//               className={`${css.svg} ${isFavorite ? css.favorite : ""}`}
//               width={24}
//               height={24}
//               onClick={handleFavoriteClick}
//             >
//               <use href={`${sprite}#icon-like`}></use>
//             </svg>
//           </div>
//         </div>
//         <div className={css.boxRatingLocation}>
//           <p className={css.textRatingLocation}>
//             <svg className={css.svg} width={16} height={16}>
//               <use href={`${sprite}#icon-star-yellow`}></use>
//             </svg>
//             <span className={css.spanRatingLocation}>
//               {item.rating} ({item.reviews.length} Reviews)
//             </span>
//           </p>
//           <p className={css.textRatingLocation}>
//             <svg className={css.svg} width={16} height={16}>
//               <use href={`${sprite}#icon-map`}></use>
//             </svg>
//             {formatLocation(item.location)}
//           </p>
//         </div>
//         <p className={css.textDescription}>{item.description}</p>
//       </div>
//     </div>
//   );
// };

// export default TruckCard;

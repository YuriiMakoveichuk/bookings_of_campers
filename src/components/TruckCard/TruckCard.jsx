import { Button } from "../Button/Button.jsx";
import Equipment from "../Equipment/Equipment.jsx";

import sprite from "../../assets/img/sprite.svg";

import css from "./TruckCard.module.css";

const TruckCard = ({ item }) => {
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
              <svg className={css.svg} width={24} height={24}>
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

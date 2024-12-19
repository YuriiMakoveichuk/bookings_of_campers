import { Button } from "../Button/Button.jsx";
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

          <div className={css.boxEquipment}>
            {item.AC && (
              <div className={css.equipment}>
                <svg className={css.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-wind`}></use>
                </svg>
                <p>AC</p>
              </div>
            )}
            {item.transmission === "automatic" && (
              <div className={css.equipment}>
                <svg className={css.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-diagram`}></use>
                </svg>
                <p>Automatic</p>
              </div>
            )}
            {item.engine === "petrol" && (
              <div className={css.equipment}>
                <svg className={css.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-fuel`}></use>
                </svg>
                <p>Petrol</p>
              </div>
            )}
            {item.kitchen && (
              <div className={css.equipment}>
                <svg className={css.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-cup-hot`}></use>
                </svg>
                <p>Kitchen</p>
              </div>
            )}
            {item.TV && (
              <div className={css.equipment}>
                <svg className={css.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-tv`}></use>
                </svg>
                <p>TV</p>
              </div>
            )}
            {item.bathroom && (
              <div className={css.equipment}>
                <svg className={css.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-ph_shower`}></use>
                </svg>
                <p>Bathroom</p>
              </div>
            )}

            {item.radio && (
              <div className={css.equipment}>
                <svg className={css.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-radios`}></use>
                </svg>
                <p>Radio</p>
              </div>
            )}

            {item.refrigerator && (
              <div className={css.equipment}>
                <svg className={css.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-solar_fridge-outline`}></use>
                </svg>
                <p>Refrigerator</p>
              </div>
            )}

            {item.water && (
              <div className={css.equipment}>
                <svg className={css.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-ion_water-outline`}></use>
                </svg>
                <p>Water</p>
              </div>
            )}

            {item.gas && (
              <div className={css.equipment}>
                <svg className={css.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-gas`}></use>
                </svg>
                <p>Gas</p>
              </div>
            )}

            {item.microwave && (
              <div className={css.equipment}>
                <svg className={css.svg} width={20} height={20}>
                  <use href={`${sprite}#icon-lucide_microwave`}></use>
                </svg>
                <p>Microwave</p>
              </div>
            )}
          </div>
          <Button to={`/catalog/${item.id}`} target={"_blank"}>
            Show more
          </Button>
        </div>
      </div>
    </>
  );
};

export default TruckCard;

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

import { Container } from "../../components/Container/Container.jsx";
import { fetchOneCamper } from "../../redux/campers/operations.js";
import { selectCampers } from "../../redux/campers/selectors.js";
import NavFeaturesReviews from "../../components/NavFeaturesReviews/NavFeaturesReviews.jsx";

import sprite from "../../assets/img/sprite.svg";

import css from "./TruckDetailsPage.module.css";

const TruckDetailsPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const camper = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchOneCamper(id));
  }, [id, dispatch]);

  console.log("camper", camper);
  const gallery = camper.gallery;

  const test = camper?.reviews?.length ?? 0;

  const formatLocation = (location) => {
    if (typeof location !== "string") {
      return "Invalid location";
    }
    const [country, city] = location.split(", ");
    return `${city}, ${country}`;
  };

  const location = camper?.location ?? "Unknown";

  return (
    <>
      <div className={css.section}>
        <Container>
          <h3 className={css.title}>{camper.name}</h3>

          <div className={css.boxRatingLocation}>
            <p className={css.textRatingLocation}>
              <svg className={css.svg} width={16} height={16}>
                <use href={`${sprite}#icon-star-yellow`}></use>
              </svg>
              <span className={css.spanRatingLocation}>
                {camper.rating}({test} Reviews)
              </span>
            </p>
            <p className={css.textRatingLocation}>
              <svg className={css.svg} width={16} height={16}>
                <use href={`${sprite}#icon-map`}></use>
              </svg>
              {formatLocation(location)}
            </p>
          </div>
          <div className={css.boxPrice}>
            <p>&euro;{camper.price}</p>
          </div>
          <ul className={css.list}>
            {Array.isArray(gallery) &&
              gallery.map((item, index) => {
                return (
                  <li key={index} className={css.item}>
                    <img
                      src={item.original}
                      alt="photo ${item.name}`"
                      className={css.img}
                    />
                  </li>
                );
              })}
          </ul>
          <p className={css.boxDescription}>{camper.description}</p>
          <div>
            <NavFeaturesReviews />
          </div>
        </Container>
        <Container>
          <div>
            <Outlet />
          </div>
        </Container>
      </div>
    </>
  );
};

export default TruckDetailsPage;

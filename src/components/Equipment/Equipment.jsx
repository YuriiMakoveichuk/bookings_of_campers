import sprite from "../../assets/img/sprite.svg";

import css from "./Equipment.module.css";

const Equipment = ({ item }) => {
  return (
    <>
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
              <use href={`${sprite}#icon-ion_water-outline1`}></use>
            </svg>
            <p>Water</p>
          </div>
        )}

        {item.gas && (
          <div className={css.equipment}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#icon-gas1`}></use>
            </svg>
            <p>Gas</p>
          </div>
        )}

        {item.microwave && (
          <div className={css.equipment}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#icon-lucide_microwave1`}></use>
            </svg>
            <p>Microwave</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Equipment;

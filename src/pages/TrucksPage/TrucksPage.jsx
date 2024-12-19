import { Container } from "../../components/Container/Container.jsx";
import FiltersForm from "../../components/FiltersForm/FiltersForm.jsx";
import TrucksList from "../../components/TrucksList/TrucksList.jsx";

import css from "./TrucksPage.module.css";

const TrucksPage = () => {
  return (
    <>
      <div className={css.section}>
        <Container>
          <div className={css.box}>
            <FiltersForm />
            <TrucksList />
          </div>
        </Container>
      </div>
    </>
  );
};

export default TrucksPage;

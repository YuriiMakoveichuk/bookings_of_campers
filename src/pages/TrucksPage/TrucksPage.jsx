import { Container } from "../../components/Container/Container.jsx";
import TrucksList from "../../components/TrucksList/TrucksList.jsx";

import css from "./TrucksPage.module.css";

const TrucksPage = () => {
  return (
    <>
      <div className={css.section}>
        <Container>
          <TrucksList />
        </Container>
      </div>
    </>
  );
};

export default TrucksPage;

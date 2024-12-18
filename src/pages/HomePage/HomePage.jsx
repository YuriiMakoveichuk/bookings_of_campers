import { Container } from "../../components/Container/Container.jsx";
import css from "./HomePage.module.css";
import { Button } from "../../components/Button/Button.jsx";

const HomePage = () => {
  return (
    <>
      <div className={css.box}>
        <Container>
          <div className={css.boxTitle}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p className={css.text}>
              You can find everything you want in our catalog
            </p>
            <Button to="/catalog">View Now</Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;

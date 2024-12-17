import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "./components/Loader/Loader.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const TrucksPage = lazy(() => import("./pages/TrucksPage/TrucksPage.jsx"));
const TruckDetailsPage = lazy(() =>
  import("./pages/TruckDetailsPage/TruckDetailsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);
const TruckFeatures = lazy(() =>
  import("./components/TruckFeatures/TruckFeatures.jsx")
);
const TruckReviews = lazy(() =>
  import("./components/TruckReviews/TruckReviews.jsx")
);

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<TrucksPage />} />
            <Route path="/catalog/:id" element={<TruckDetailsPage />}>
              <Route path="features" element={<TruckFeatures />} />
              <Route path="reviews" element={<TruckReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;

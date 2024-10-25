import React from "react";
import { NetflixSeries } from "./components/NetflixSeries";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <NetflixSeries />
      <Footer />
    </>
  );
};

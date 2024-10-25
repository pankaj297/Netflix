import React from "react";
import { NetflixSeries } from "./components/NetflixSeries";
import Header from "./components/Header";

export const App = () => {
  return (
    <>
      <Header />
      <NetflixSeries />
    </>
  );
};

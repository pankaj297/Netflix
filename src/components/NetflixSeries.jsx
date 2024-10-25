import React from "react";
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () => {
  return (
    <>
      <ul>
        {seriesData.map((currElem) => {
          return <SeriesCard key={currElem.id} data={currElem} />;
        })}
      </ul>
    </>
  );
};



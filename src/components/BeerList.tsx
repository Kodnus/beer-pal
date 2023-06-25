import React, { useState } from "react";
import BeerCard from "./BeerCard";
import { Beer } from "../types/Beer";

interface ChildProps {
  beersArray: Array<Beer>;
  detailedView?: boolean;
}

//Our list that renders our BeerCard
const BeerList: React.FC<ChildProps> = ({ beersArray, detailedView }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {beersArray.map((data) => {
        return (
          <BeerCard
            key={data.id}
            beerID={data.id}
            image_url={data.image_url}
            name={data.name}
            tagline={data.tagline}
            description={data.description}
            abv={data.abv}
            ibu={data.ibu}
            first_brewed={data.first_brewed}
            food_pairing={data.food_pairing}
            detailedView={detailedView}
          />
        );
      })}
    </div>
  );
};

export default BeerList;

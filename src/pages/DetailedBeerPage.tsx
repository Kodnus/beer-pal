import React from "react";
import { useParams } from "react-router-dom";
import { Beer } from "../types/Beer";
import BeerCard from "../components/BeerCard";

interface ChildProps {
  beersArray: Array<Beer>;
}

const DetaileDBeerPage: React.FC<ChildProps> = ({ beersArray }) => {
  //When routing we send a parameter as well, in this case a string
  const { id } = useParams<{ id: string }>();

  //Parse the string to int, since our type is that of number
  //I have a comment on this in the readme as well
  const parsedBeerId = parseInt(id || "");

  //Compare the id to our objects in the array and see if we find a match
  const foundBeer = beersArray.find((data) => data.id === parsedBeerId);

  return (
    <div className="flex justify-center pt-10">
      {foundBeer ? (
        <BeerCard
          image_url={foundBeer.image_url}
          name={foundBeer.name}
          tagline={foundBeer.tagline}
          description={foundBeer.description}
          first_brewed={foundBeer.first_brewed}
          abv={foundBeer.abv}
          food_pairing={foundBeer.food_pairing}
          ibu={foundBeer.ibu}
          detailedView={true}
        ></BeerCard>
      ) : (
        <div>
          {/* If no match is found, we get this message */}
          <p>Sorry, your beer is lost</p>
        </div>
      )}
    </div>
  );
};

export default DetaileDBeerPage;

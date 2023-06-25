import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { Link } from "react-router-dom";

type BeerCardProps = {
  beerID?: number;
  image_url: string;
  name: string;
  tagline: string;
  description: string;
  first_brewed?: string;
  abv: string;
  food_pairing?: string[];
  ibu: string;
  detailedView?: boolean; //This prop is set as true, if we want to show additional data in our BeerCard
};

const BeerCard: React.FC<BeerCardProps> = ({
  beerID,
  image_url,
  name,
  tagline,
  description,
  first_brewed,
  abv,
  food_pairing = [],
  ibu,
  detailedView,
}) => {
  //This function handles if the description is longer than 280 words
  //If it is, it could shove down the container of our card, making it bigger
  const calcDescLength = () => {
    if (description.length > 280) {
      return (
        <>
          {description.substring(0, 280)}
          <span className="font-bold"> ...</span>
        </>
      );
    } else {
      return description;
    }
  };

  return (
    <div>
      <IonCard
        className={`flex w-[20rem] h-[22rem] sm:w-[30rem] p-2 sm:h-[17rem] ${
          detailedView && "sm:h-[23rem]"
        }`}
      >
        <img alt={name} src={image_url} className="h-[10rem] sm:h-[16rem]" />
        <div className="flex flex-col justify-between">
          <div className="">
            <IonCardHeader className="pt-0">
              <IonCardTitle>{name}</IonCardTitle>
              <IonCardSubtitle>{tagline}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent className="">{calcDescLength()}</IonCardContent>
          </div>
          <div className="flex justify-between pl-4">
            <p className="self-center">{"Alcohol: " + abv + "%"}</p>
            <p className="self-center">Bitterness: {ibu}</p>
            {!detailedView && (
              <IonButton className="w-[4rem]">
                <Link to={`/detailed/${beerID}`}>More</Link>
              </IonButton>
            )}
          </div>
          {/* Here our data is rendered if detailedView is true */}
          {detailedView && (
            <div className="flex flex-col">
              <div>
                <h1 className="text-xl font-bold">Additional info</h1>
              </div>
              <div>
                <p className="pb-2">This was first brewed: {first_brewed}</p>
                <p>Pair with these amazing dishes:</p>
                {food_pairing.map((data, index) => {
                  return <div key={index}>{data}</div>;
                })}
              </div>
            </div>
          )}
        </div>
      </IonCard>
    </div>
  );
};

export default BeerCard;

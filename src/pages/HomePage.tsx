import React, { useState } from "react";
import "@ionic/react/css/core.css";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  setupIonicReact,
} from "@ionic/react";

//Component and type import
import BeerList from "../components/BeerList";
import { Beer } from "../types/Beer";
import RegularInput from "../components/regulars/RegularInput";

setupIonicReact();

interface ChildProps {
  beersArray: Array<Beer>;
}

const HomePage: React.FC<ChildProps> = ({ beersArray }) => {
  const [beers, setBeers] = useState<Array<Beer>>(beersArray);
  const [newBeer, setNewBeer] = useState<Beer>({
    id: 0,
    image_url: "https://images.punkapi.com/v2/keg.png", //I have not added the ability to upload pictures, so this will be a template picture
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    food_pairing: [""],
    abv: "",
    ibu: "",
  });

  //Sort functions
  const sortAlphabetically = () => {
    const sortedArray = [...beers].sort((a, b) =>
      a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
    );
    setBeers(sortedArray);
  };

  const sortByAlcoholPercent = () => {
    const sortedArray = [...beers].sort(
      (a, b) => Number(a.abv) - Number(b.abv)
    );
    setBeers(sortedArray);
  };

  const sortByBitterness = () => {
    const sortedArray = [...beers].sort(
      (a, b) => Number(a.ibu) - Number(b.ibu)
    );
    setBeers(sortedArray);
  };

  //I have used chatGPT for this function
  //I wanted to handle this by having a useState for every input, but deemed it as extensive
  //I then asked the magic machine if there was an easier way
  const handleInputChange =
    (property: keyof Beer) => (value: React.SetStateAction<string>) => {
      setNewBeer((prevState) => ({
        ...prevState,
        [property]: value,
      }));
    };

  //When user clicks on button to add a new beer, this will add our new beer to the array
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newId = beers.length + 1;

    const updatedBeer: Beer = {
      ...newBeer,
      id: newId,
    };

    console.log(updatedBeer);
    //Resets the data in our useState
    setBeers((prevBeers) => [updatedBeer, ...prevBeers]);
    setNewBeer({
      id: 0,
      image_url: "https://images.punkapi.com/v2/keg.png", //Same template picture
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      food_pairing: [""],
      abv: "",
      ibu: "",
    });
  };

  return (
    <div className="px-[8rem] pt-[2rem]">
      <div id="newBeerForm" className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <IonCard className="flex flex-col w-[15rem] md:w-auto">
            <IonCardHeader className="self-center">
              <IonCardTitle>Add new beer!</IonCardTitle>
            </IonCardHeader>

            <IonCardContent className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <RegularInput
                value={newBeer.name}
                changeCallback={handleInputChange("name")}
                label={"Beer Name"}
              ></RegularInput>
              <RegularInput
                value={newBeer.tagline}
                changeCallback={handleInputChange("tagline")}
                label={"Beer Tagline"}
              ></RegularInput>
              <RegularInput
                value={newBeer.description}
                changeCallback={handleInputChange("description")}
                label={"Beer Description"}
              ></RegularInput>
              <RegularInput
                value={newBeer.first_brewed}
                changeCallback={handleInputChange("first_brewed")}
                label={"First brewed"}
              ></RegularInput>
              <RegularInput
                value={newBeer.abv}
                changeCallback={handleInputChange("abv")}
                label={"Alcohol percent/abv"}
              ></RegularInput>
              <RegularInput
                value={newBeer.ibu}
                changeCallback={handleInputChange("ibu")}
                label={"Bitterness/ibu"}
              ></RegularInput>
            </IonCardContent>
            <div className="flex justify-center pb-3">
              <IonButton type="submit">Add Beer</IonButton>
            </div>
          </IonCard>
        </form>
      </div>

      <div className="flex flex-wrap justify-center">
        <IonButton className="" onClick={sortAlphabetically}>
          Sort By Name
        </IonButton>
        <IonButton className="" onClick={sortByAlcoholPercent}>
          Sort By Alcohol Percentage
        </IonButton>
        <IonButton className="" onClick={sortByBitterness}>
          Sort By Bitterness
        </IonButton>
      </div>

      <div>
        <BeerList beersArray={beers} />
      </div>
    </div>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "@ionic/react/css/core.css";
import { setupIonicReact } from "@ionic/react";
import HomePage from "./pages/HomePage";
import DetailedBeerPage from "./pages/DetailedBeerPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beer } from "./types/Beer";
import Header from "./components/regulars/Header";

setupIonicReact();

//We fetch the API data in our App and feed it to the other pages with props
//I have a comment on this in the readme
//Axios is used for the API functionality
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [beersArray, setBeersArray] = useState<Array<Beer>>([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        await axios.get(`https://api.punkapi.com/v2/beers`).then((res) => {
          setBeersArray(res.data);
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  //Let user know the API has not yet finished fetching
  if (isLoading) {
    return <p>Loading beers...</p>;
  }

  //Here we use our App to route with the react-router-dom
  return (
    <BrowserRouter>
      <div className="content">
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage beersArray={beersArray} />} />
          <Route
            path="/detailed/:id"
            element={<DetailedBeerPage beersArray={beersArray} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

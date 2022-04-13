import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header";
import Navigation from "./navigation";
import { FavouritesProvider } from "../context_providers/FavouritesContext";
import { DisneyCharacter } from "../disney_character";
import { useCurrentPage } from "../context_providers/CurrentPageContext";

export const CharactersContext = React.createContext<Array<DisneyCharacter>>(
  []
);

const CurrentPageContextComponent: React.FC = () => {
  const currentPage = useCurrentPage();
  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);

  const getCharacters = async (pageNumber: number) => {
    console.log(`getCharacters for page ${pageNumber}`);
    const apiResponse = await axios.get(
      `http://api.disneyapi.dev/characters?page=${pageNumber}`
    );
    setCharacters(apiResponse.data.data);
  };

  useEffect(() => {
    getCharacters(currentPage.currentPage);
  }, [currentPage]);

  return (
    <>
      <Header />
      <Navigation />
      <CharactersContext.Provider value={characters}>
        <FavouritesProvider />
      </CharactersContext.Provider>
    </>
  );
};

export default CurrentPageContextComponent;

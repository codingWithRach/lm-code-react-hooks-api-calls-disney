import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header";
import Navigation from "./navigation";
import FavouritesProvider from "../context_providers/FavouritesContext";
import { DisneyCharacter } from "../disney_character";
import { useCurrentPage } from "../context_providers/CurrentPageContext";
import CharacterContainer from "./character_container";
import { useShowAll } from "../context_providers/ShowAllContext";

export const CharactersContext = React.createContext<Array<DisneyCharacter>>(
  []
);

const CurrentPageLayout: React.FC = () => {
  const currentPage = useCurrentPage();
  const showAll = useShowAll();
  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);

  const getCharacters = async (pageNumber: number) => {
    const apiResponse = await axios.get(
      `http://api.disneyapi.dev/characters?page=${pageNumber}`
    );
    setCharacters(apiResponse.data.data);
  };

  useEffect(() => {
    getCharacters(currentPage.currentPage);
  }, [currentPage, showAll]);

  return (
    <>
      <Header />
      <Navigation />
      <CharactersContext.Provider value={characters}>
        <FavouritesProvider>
          <CharacterContainer />
        </FavouritesProvider>
      </CharactersContext.Provider>
    </>
  );
};

export default CurrentPageLayout;

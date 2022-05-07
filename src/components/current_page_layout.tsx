import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header";
import Navigation from "./navigation";
import { DisneyCharacter } from "../disney_character";
import CharacterContainer from "./character_container";
import { useDisneyContext } from "../context_providers/disney_context";

export const CharactersContext = React.createContext<Array<DisneyCharacter>>(
  []
);

const CurrentPageLayout: React.FC = () => {
  const currentPage = useDisneyContext().currentPage;
  const showAll = useDisneyContext().showAll;
  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);

  const getCharacters = async (pageNumber: number) => {
    const apiResponse = await axios.get(
      `http://api.disneyapi.dev/characters?page=${pageNumber}`
    );
    setCharacters(apiResponse.data.data);
  };

  useEffect(() => {
    getCharacters(currentPage);
  }, [currentPage, showAll]);

  return (
    <>
      <Header />
      <Navigation />
      <CharactersContext.Provider value={characters}>
        <CharacterContainer />
      </CharactersContext.Provider>
    </>
  );
};

export default CurrentPageLayout;

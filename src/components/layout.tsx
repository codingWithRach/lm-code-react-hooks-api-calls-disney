import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { DisneyCharacter } from "../disney_character";
import { FavouritesProvider } from "../context_providers/FavouritesContext";
import Header from "./header";
import Navigation from "./navigation";

export const CharactersContext = React.createContext<Array<DisneyCharacter>>(
  []
);

const Layout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);

  const getCharacters = async (pageNumber: number) => {
    const apiResponse = await axios.get(
      `http://api.disneyapi.dev/characters?page=${pageNumber}`
    );
    setCharacters(apiResponse.data.data);
  };

  useEffect(() => {
    getCharacters(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className="page">
        <Header currentPage={currentPage} />
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <CharactersContext.Provider value={characters}>
          <FavouritesProvider />
        </CharactersContext.Provider>
      </div>
    </>
  );
};

export default Layout;

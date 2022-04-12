import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import { DisneyCharacter } from "./disney_character";
import axios from "axios";
import { FavouritesProvider } from "./FavouritesContext";

export const CharactersContext = React.createContext<Array<DisneyCharacter>>(
  []
);

const App: React.FC = () => {
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

export default App;

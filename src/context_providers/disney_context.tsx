import React, { SetStateAction, useContext, useState } from "react";
import { DisneyCharacter } from "../disney_character";

interface IDisneyContext {
  showAll: boolean;
  updateShowAll: React.Dispatch<SetStateAction<boolean>>;
  currentPage: number;
  updateCurrentPage: React.Dispatch<SetStateAction<number>>;
  favourites: Array<DisneyCharacter>;
  toggleFavouriteForCharacter: (character: DisneyCharacter) => void;
}

const DisneyContext = React.createContext<IDisneyContext>({} as IDisneyContext);

export function useDisneyContext(): IDisneyContext {
  return useContext(DisneyContext);
}

const DisneyProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [showAll, setShowAll] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [favourites, setFavourites] = useState<Array<DisneyCharacter>>([]);

  function toggleFavouriteForCharacter(character: DisneyCharacter) {
    // if not already a favourite, add it
    if (
      favourites.filter((favourite) => favourite._id === character._id)
        .length === 0
    ) {
      setFavourites([...favourites, character]);
    }
    // if already a favourite, remove it
    else {
      const updatedFavourites = favourites.filter(
        (favourite) => favourite._id !== character._id
      );
      setFavourites([...updatedFavourites]);
    }
  }

  return (
    <DisneyContext.Provider
      value={{
        showAll: showAll,
        updateShowAll: setShowAll,
        currentPage: currentPage,
        updateCurrentPage: setCurrentPage,
        favourites: favourites,
        toggleFavouriteForCharacter: toggleFavouriteForCharacter,
      }}
    >
      {children}
    </DisneyContext.Provider>
  );
};

export default DisneyProvider;

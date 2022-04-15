import React, { useContext, useState } from "react";
import { DisneyCharacter } from "../disney_character";
export interface IFavouritesContext {
  favourites: Array<DisneyCharacter>;
}
const FavouritesContext = React.createContext<IFavouritesContext>({
  favourites: [],
});
const defaultFunction = (character: DisneyCharacter) => {};
const FavouritesUpdateContext =
  React.createContext<(character: DisneyCharacter) => void>(defaultFunction);

export function useFavourites(): IFavouritesContext {
  return useContext(FavouritesContext);
}

export function useFavouritesUpdate(): typeof defaultFunction {
  return useContext(FavouritesUpdateContext);
}

const FavouritesProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [favourites, setFavourites] = useState<IFavouritesContext>({
    favourites: [],
  });

  function toggleFavouriteForCharacter(character: DisneyCharacter) {
    // if not already a favourite, add it
    if (
      favourites.favourites.filter(
        (favourite) => favourite._id === character._id
      ).length === 0
    ) {
      setFavourites({
        favourites: [...favourites.favourites, character],
      });
    }

    // if already a favourite, remove it
    else {
      const updatedFavourites = favourites.favourites.filter(
        (favourite) => favourite._id !== character._id
      );
      setFavourites({
        favourites: updatedFavourites,
      });
    }
  }

  return (
    <FavouritesContext.Provider value={favourites}>
      <FavouritesUpdateContext.Provider value={toggleFavouriteForCharacter}>
        {children}
      </FavouritesUpdateContext.Provider>
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;

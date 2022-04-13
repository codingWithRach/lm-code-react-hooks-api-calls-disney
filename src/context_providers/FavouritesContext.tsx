import React, { useContext, useState } from "react";
import FavouritesContextComponent from "../components/FavouritesContextComponent";

export interface IFavouritesContext {
  favourites: Array<number>;
}
const FavouritesContext = React.createContext<IFavouritesContext>({
  favourites: [],
});
const defaultFunction = (id: number) => {};
const FavouritesUpdateContext =
  React.createContext<(id: number) => void>(defaultFunction);

export function useFavourites(): IFavouritesContext {
  return useContext(FavouritesContext);
}

export function useFavouritesUpdate() {
  return useContext(FavouritesUpdateContext);
}

const FavouritesProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [favourites, setFavourites] = useState<IFavouritesContext>({
    favourites: [],
  });

  function toggleFavouriteForCharacter(characterId: number) {
    // if not already a favourite, add it
    if (!favourites.favourites.includes(characterId)) {
      setFavourites({ favourites: [...favourites.favourites, characterId] });
    }
    // if already a favourite, remove it
    else {
      const updatedFavourites = favourites.favourites.filter(
        (id) => id !== characterId
      );
      setFavourites({ favourites: updatedFavourites });
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

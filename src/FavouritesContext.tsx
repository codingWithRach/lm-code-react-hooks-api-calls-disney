import React, { useContext, useState } from "react";
import ContextComponent from "./components/ContextComponent";

const defaultFunction = (id: number) => {};
const FavouritesContext = React.createContext<Array<number>>([]);
const FavouritesUpdateContext =
  React.createContext<(id: number) => void>(defaultFunction);

export function useFavourites(): Array<number> {
  return useContext(FavouritesContext);
}

export function useFavouritesUpdate() {
  return useContext(FavouritesUpdateContext);
}

export function FavouritesProvider() {
  const [favourites, setFavourites] = useState<Array<number>>([]);

  function toggleFavouriteForCharacter(characterId: number) {
    // if not already a favourite, add it
    if (!favourites.includes(characterId)) {
      setFavourites([...favourites, characterId]);
    }
    // if already a favourite, remove it
    else {
      const updatedFavourites = favourites.filter((id) => id !== characterId);
      setFavourites(updatedFavourites);
    }
  }

  return (
    <FavouritesContext.Provider value={favourites}>
      <FavouritesUpdateContext.Provider value={toggleFavouriteForCharacter}>
        <ContextComponent />
      </FavouritesUpdateContext.Provider>
    </FavouritesContext.Provider>
  );
}

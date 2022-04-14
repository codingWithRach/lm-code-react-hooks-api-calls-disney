import React, { useContext } from "react";
import { useFavourites } from "../context_providers/FavouritesContext";
import { useShowAll } from "../context_providers/ShowAllContext";
import { DisneyCharacter } from "../disney_character";
import Character from "./character";
import { CharactersContext } from "./current_page_layout";
import {
  useCurrentPage,
  useCurrentPageUpdate,
} from "../context_providers/CurrentPageContext";

const CharacterContainer: React.FC = () => {
  let characters: Array<DisneyCharacter> = [...useContext(CharactersContext)];
  const favourites = useFavourites();
  const showAll = useShowAll();
  const currentPage = useCurrentPage().currentPage;
  const updateCurrentPage = useCurrentPageUpdate();
  let displayCharacters: Array<DisneyCharacter> = [];
  if (showAll) {
    displayCharacters = [...characters];
  } else {
    displayCharacters = [...favourites.favourites];
  }

  // this function separates our array of DisneyCharacters into rows and columns
  const buildRows = () => {
    // we'll need arrays to store the rows and cols in, and they will be of type JSX.Element
    let rows: Array<JSX.Element> = [],
      cols: Array<JSX.Element> = [];

    displayCharacters.forEach((character, index) => {
      cols.push(<Character key={character._id} character={character} />);
      if ((index + 1) % 5 === 0) {
        rows.push(
          <div className="character-row" key={index}>
            {cols}
          </div>
        );
        cols = [];
      }
    });

    // Final remaining columns
    if (cols.length > 0) {
      rows.push(
        <div className="character-row" key={displayCharacters.length}>
          {cols}
        </div>
      );
    }
    return rows;
  };

  if (buildRows().length === 0 && currentPage > 1) {
    updateCurrentPage(currentPage - 1);
  }

  return <div className="character-container">{buildRows()}</div>;
};

export default CharacterContainer;

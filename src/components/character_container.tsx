import React, { useContext, useEffect } from "react";
import { DisneyCharacter } from "../disney_character";
import Character from "./character";
import { CharactersContext } from "./current_page_layout";
import { useDisneyContext } from "../context_providers/disney_context";

const CharacterContainer: React.FC<React.ReactNode> = () => {
  let characters: Array<DisneyCharacter> = [...useContext(CharactersContext)];
  const favourites: Array<DisneyCharacter> = useDisneyContext().favourites;
  const showAll: boolean = useDisneyContext().showAll;
  const updateShowAll = useDisneyContext().updateShowAll;
  const currentPage: number = useDisneyContext().currentPage;
  const updateCurrentPage = useDisneyContext().updateCurrentPage;

  // if showing favourites and all favourites are removed, revert to showing all
  useEffect(() => {
    if (!showAll && favourites.length === 0) {
      updateShowAll(true);
    }
  });

  // select whether to display all characters or favourite characters
  let displayCharacters: Array<DisneyCharacter> = [];
  if (showAll) {
    displayCharacters = [...characters];
  } else {
    displayCharacters = [...favourites];
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

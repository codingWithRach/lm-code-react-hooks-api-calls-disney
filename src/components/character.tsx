import { useContext } from "react";
import { FavouritesContext } from "../App";
import { DisneyCharacter } from "../disney_character";

interface CharacterProps {
  character: DisneyCharacter;
  updateFavourites: (favourites: Array<number>) => void;
}
// - defining an anonymous type that just has one property - a DisneyCharacter
const Character: React.FC<CharacterProps> = ({
  character,
  updateFavourites,
}) => {
  const characterFavourites = useContext(FavouritesContext);

  // define default in case character doesn't have an image
  let imageSrc = "https://picsum.photos/300/200/?blur";
  if (character.imageUrl) {
    // API sometimes includes extra path for images, so strip it off to fetch raw image
    const posRevision = character.imageUrl.indexOf("/revision");
    imageSrc = character.imageUrl.substring(
      0,
      posRevision === -1 ? character.imageUrl.length : posRevision
    );
  }

  function toggleFavouriteForCharacter(characterId: number) {
    // if not already a favourite, add it
    if (!characterFavourites.includes(characterId)) {
      updateFavourites([...characterFavourites, characterId]);
    }
    // if already a favourite, remove it
    else {
      const updatedFavourites = characterFavourites.filter(
        (id) => id !== characterId
      );
      updateFavourites(updatedFavourites);
    }
  }

  return (
    <article className="character-item">
      <h2>{character.name}</h2>

      <div
        className="character-item__actions"
        onClick={() => toggleFavouriteForCharacter(character._id)}
      >
        {!characterFavourites.includes(character._id)
          ? "Add to Favourites"
          : "Selected as Favourite"}
      </div>

      <img
        className="character-item__img"
        src={imageSrc}
        alt={character.name}
      />
    </article>
  );
};

export default Character;

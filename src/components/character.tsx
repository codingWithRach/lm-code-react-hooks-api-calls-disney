import { DisneyCharacter } from "../disney_character";
import {
  IFavouritesContext,
  useFavourites,
  useFavouritesUpdate,
} from "../context_providers/FavouritesContext";

interface CharacterProps {
  character: DisneyCharacter;
}
// - defining an anonymous type that just has one property - a DisneyCharacter
const Character: React.FC<CharacterProps> = ({ character }) => {
  const favourites: IFavouritesContext = useFavourites();
  const toggleFavouriteForCharacter = useFavouritesUpdate();

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

  return (
    <article className="character-item">
      <h2>{character.name}</h2>

      <div
        className="character-item__actions"
        onClick={() => toggleFavouriteForCharacter(character)}
      >
        {favourites.favourites.filter(
          (favourite) => favourite._id === character._id
        ).length === 0
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

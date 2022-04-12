import { DisneyCharacter } from "../disney_character";

// for our props we can reuse the DisneyCharacter interface
// - defining an anonymous type that just has one property - a DisneyCharacter
const Character: React.FC<{ character: DisneyCharacter }> = ({ character }) => {
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

      <div className="character-item__actions">Add to Favourites</div>

      <img
        className="character-item__img"
        src={imageSrc}
        alt={character.name}
      />
    </article>
  );
};

export default Character;

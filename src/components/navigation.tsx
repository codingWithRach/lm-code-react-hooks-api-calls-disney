import { useDisneyContext } from "../context_providers/disney_context";

const Navigation: React.FC = () => {
  const currentPage = useDisneyContext().currentPage;
  const updateCurrentPage = useDisneyContext().updateCurrentPage;
  const showAll = useDisneyContext().showAll;
  const updateShowAll = useDisneyContext().updateShowAll;

  const nextPage = () => {
    if (showAll) {
      updateCurrentPage(currentPage + 1);
    }
  };

  const showFavourites = () => {
    updateCurrentPage(1);
    if (showAll) {
      updateShowAll(false);
    } else {
      updateShowAll(true);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      updateCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="navigation">
      <div className="navigation__item">
        <button
          className={
            showAll ? "navigation__button" : "navigation__button--hidden"
          }
          onClick={prevPage}
        >
          Prev Page
        </button>
      </div>
      <div className="navigation__item">
        <button className="navigation__button" onClick={showFavourites}>
          {showAll ? "Show Favourites" : "Show All"}
        </button>
      </div>
      <div className="navigation__item">
        <button
          className={
            showAll ? "navigation__button" : "navigation__button--hidden"
          }
          onClick={nextPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Navigation;

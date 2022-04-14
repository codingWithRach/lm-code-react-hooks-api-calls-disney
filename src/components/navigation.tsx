import {
  useCurrentPage,
  useCurrentPageUpdate,
} from "../context_providers/CurrentPageContext";
import {
  useShowAll,
  useShowAllUpdate,
} from "../context_providers/ShowAllContext";

const Navigation: React.FC = () => {
  const currentPage = useCurrentPage();
  const updateCurrentPage = useCurrentPageUpdate();
  const showAll = useShowAll();
  const updateShowAll = useShowAllUpdate();

  const nextPage = () => {
    if (showAll) {
      updateCurrentPage(currentPage.currentPage + 1);
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
    if (currentPage.currentPage > 1) {
      updateCurrentPage(currentPage.currentPage - 1);
    }
  };

  return (
    <div className="navigation">
      <div className="navigation__item">
        <button className="navigation__button" onClick={prevPage}>
          Prev Page
        </button>
      </div>
      <div className="navigation__item">
        <button className="navigation__button" onClick={showFavourites}>
          {showAll ? "Show Favourites" : "Show All"}
        </button>
      </div>
      <div className="navigation__item">
        <button className="navigation__button" onClick={nextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Navigation;

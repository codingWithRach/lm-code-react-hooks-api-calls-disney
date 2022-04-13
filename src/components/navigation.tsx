import {
  useCurrentPage,
  useCurrentPageUpdate,
} from "../context_providers/CurrentPageContext";

const Navigation: React.FC = () => {
  const currentPage = useCurrentPage();
  const updateCurrentPage = useCurrentPageUpdate();

  const nextPage = () => {
    updateCurrentPage(currentPage.currentPage + 1);
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
        <button className="navigation__button" onClick={prevPage}>
          Show Favourites
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

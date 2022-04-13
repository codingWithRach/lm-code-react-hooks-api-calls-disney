import { useCurrentPage } from "../context_providers/CurrentPageContext";

const Header: React.FC = () => {
  const currentPage = useCurrentPage();
  return (
    <>
      <header className="header__container">
        <h1 className="header__title">The World of Disney</h1>
        <p className="header__page-count ">Page: {currentPage.currentPage}</p>
      </header>
    </>
  );
};

export default Header;

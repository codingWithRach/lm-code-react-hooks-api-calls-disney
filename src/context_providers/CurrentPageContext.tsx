import React, { useContext, useState } from "react";

export interface ICurrentPageContext {
  currentPage: number;
}
const CurrentPageContext = React.createContext<ICurrentPageContext>({
  currentPage: 1,
});
const defaultFunction = (pageNumber: number) => {};
const CurrentPageUpdateContext =
  React.createContext<(pageNumber: number) => void>(defaultFunction);

export function useCurrentPage(): ICurrentPageContext {
  return useContext(CurrentPageContext);
}

export function useCurrentPageUpdate(): typeof defaultFunction {
  return useContext(CurrentPageUpdateContext);
}

const CurrentPageProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<ICurrentPageContext>({
    currentPage: 1,
  });

  function updateCurrentPage(pageNumber: number) {
    setCurrentPage({ currentPage: pageNumber });
  }

  return (
    <CurrentPageContext.Provider value={currentPage}>
      <CurrentPageUpdateContext.Provider value={updateCurrentPage}>
        {children}
      </CurrentPageUpdateContext.Provider>
    </CurrentPageContext.Provider>
  );
};

export default CurrentPageProvider;

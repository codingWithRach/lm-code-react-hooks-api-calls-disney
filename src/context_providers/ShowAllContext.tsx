import React, { useContext, useState } from "react";

const ShowAllContext = React.createContext<boolean>(true);

const defaultFunction = (showAll: boolean) => {};
const ShowAllUpdateContext =
  React.createContext<(showAll: boolean) => void>(defaultFunction);

export function useShowAll(): boolean {
  return useContext(ShowAllContext);
}

export function useShowAllUpdate() {
  return useContext(ShowAllUpdateContext);
}

const ShowAllProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [showAll, setShowAll] = useState<boolean>(true);

  function updateShowAll(showAll: boolean) {
    setShowAll(showAll);
  }

  return (
    <ShowAllContext.Provider value={showAll}>
      <ShowAllUpdateContext.Provider value={updateShowAll}>
        {children}
      </ShowAllUpdateContext.Provider>
    </ShowAllContext.Provider>
  );
};

export default ShowAllProvider;

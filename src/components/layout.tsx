import React from "react";
import CurrentPageProvider from "../context_providers/CurrentPageContext";
import CurrentPageContextComponent from "./CurrentPageContextComponent";

const Layout: React.FC = () => {
  return (
    <div className="page">
      <CurrentPageProvider>
        <CurrentPageContextComponent />
      </CurrentPageProvider>
    </div>
  );
};

export default Layout;

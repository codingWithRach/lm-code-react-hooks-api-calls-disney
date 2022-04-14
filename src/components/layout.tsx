import React from "react";
import CurrentPageProvider from "../context_providers/CurrentPageContext";
import ShowAllProvider from "../context_providers/ShowAllContext";
import CurrentPageLayout from "./current_page_layout";

const Layout: React.FC = () => {
  return (
    <div className="page">
      <ShowAllProvider>
        <CurrentPageProvider>
          <CurrentPageLayout />
        </CurrentPageProvider>
      </ShowAllProvider>
    </div>
  );
};

export default Layout;

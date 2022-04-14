import React from "react";
import CurrentPageProvider from "../context_providers/CurrentPageContext";
import CurrentPageLayout from "./current_page_layout";

const Layout: React.FC = () => {
  return (
    <div className="page">
      <CurrentPageProvider>
        <CurrentPageLayout />
      </CurrentPageProvider>
    </div>
  );
};

export default Layout;

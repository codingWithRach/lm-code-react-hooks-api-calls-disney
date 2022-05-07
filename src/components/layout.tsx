import React from "react";
import DisneyProvider from "../context_providers/disney_context";
import CurrentPageLayout from "./current_page_layout";

const Layout: React.FC = () => {
  return (
    <div className="page">
      <DisneyProvider>
        <CurrentPageLayout />
      </DisneyProvider>
    </div>
  );
};

export default Layout;

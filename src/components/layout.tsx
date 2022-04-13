import React from "react";
import { CurrentPageProvider } from "../context_providers/CurrentPageContext";

const Layout: React.FC = () => {
  return (
    <div className="page">
      <CurrentPageProvider />
    </div>
  );
};

export default Layout;

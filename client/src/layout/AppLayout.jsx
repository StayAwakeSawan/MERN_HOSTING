import React from "react";
import { Outlet } from "react-router";

function AppLayout({ children }) {
  return (
    <div>
      header
      {children}
      footer
    </div>
  );
}

export default AppLayout;

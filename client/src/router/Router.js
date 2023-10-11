import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import AppLayout from "../layout/AppLayout";
import { appRoutes } from "./appRoutes";
import { allRotues } from "./allRoutes";
import { Fragment } from "react";
import AuthWrapper from "./AuthChecker";

function MainWrapper({ route, children }) {
  const LayoutWrpper = route.hasLayout ? AppLayout : Fragment;

  const PrivateWrapper = route.requiredAuth ? AuthWrapper : Fragment;

  return (
    <PrivateWrapper>
      <LayoutWrpper>{children}</LayoutWrpper>;
    </PrivateWrapper>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {allRotues.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <MainWrapper route={route}>
                  <route.component />
                </MainWrapper>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

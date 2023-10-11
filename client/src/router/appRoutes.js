import Home from "../pages/Home";
import Product from "../pages/Product";

export const appRoutes = [
  {
    id: "appRoutes_1",
    path: "/",
    component: Home,
    hasLayout: true,
    requiredAuth: true,
  },
  {
    id: "appRoutes_2",
    path: "/product",
    component: Product,
    hasLayout: true,
    requiredAuth: true,
  },
];

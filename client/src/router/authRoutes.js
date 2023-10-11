import Login from "../pages/Login";

export const authRoutes = [
  {
    id: "Auth_routes_1",
    path: "/login",
    component: Login,
    hasLayout: false,
    requiredAuth: false,
  },
  {
    id: "Auth_routes_1",
    path: "/register",
    component: Login,
    hasLayout: false,
    requiredAuth: false,
  },
];

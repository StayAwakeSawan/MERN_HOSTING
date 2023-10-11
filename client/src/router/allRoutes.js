import { appRoutes } from "./appRoutes";
import { authRoutes } from "./authRoutes";

export const allRotues = [...authRoutes, ...appRoutes];

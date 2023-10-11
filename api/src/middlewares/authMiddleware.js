import User from "../model/user.model.js";
import { verifyToken } from "../utils/jwt.utils.js";

export default async function authMiddleware(req, res, next) {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      throw new Error(`Auth is needed`);
    }
    console.log(bearerToken);

    const [tokenType, tokenValue] = bearerToken.split(" ");

    if (tokenType != "Bearer" || !tokenValue) {
      throw new Error(`Token is invalid`);
    }

    const decodedValue = verifyToken(tokenValue);

    if (!decodedValue?.id) {
      throw new Error(`Token malformed.`);
    }

    const user = await User.findById(decodedValue.id);

    if (!user) {
      throw new Error(`User couldn't be resolved.`);
    }

    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
}

export function authorizeUser(req, res, next) {
  try {
    if (!req.user) {
      throw new Error(`Can't resolved user`);
    }

    console.log(req.user);

    if (req.user.role !== "user") {
      throw new Error("No authorize for this privilege");
    }

    next();
  } catch (e) {
    next(e);
  }
}

export function authorizeAdmin(req, res, next) {
  try {
    if (!req.user) {
      throw new Error(`Can't resolved user`);
    }

    if (req.user.role !== "admin") {
      throw new Error("No authorize for this privilege");
    }

    next();
  } catch (e) {
    next(e);
  }
}

export function authorizeAdminRole() {
  return [authMiddleware, authorizeAdmin];
}

export function authorizeUserRole() {
  return [authMiddleware, authorizeUser];
}

import { Router } from "express";
import { userController } from "../controller/user.controller.js";
import authMiddleware, {
  authorizeUserRole,
} from "../middlewares/authMiddleware.js";

import uploadFile from "../middlewares/uploadFile.middleware.js";
import paginationValidation from "../validator/global/paginationValidation.js";
import {
  getUserIdParam,
  patchUserValidation,
  postUserValidation,
} from "../validator/user.validator.js";
import validationResult from "../validator/validator.js";
import ExpressError from "../common/expressError.js";
import validatorResult from "../validator/validator.js";

const userRouter = Router();
const userImageFolder = "user";

// const upload = multer({ dest: "uploads/" });

userRouter.get(
  "/",
  paginationValidation(),
  validationResult,
  userController.getAll
);

userRouter.post(
  "/",
  postUserValidation(),
  validationResult,
  userController.register
);

userRouter.get("/protected", authorizeUserRole(), (req, res) => {
  console.log("injected value", req.user);
  res.send("into controller");
});

// 1. file inside of code space
// 2. file encoded value in DB
// 3. Bucket Cloud

userRouter.patch(
  "/upload-profile",
  uploadFile("profile_picture", userImageFolder),

  (req, res, next) => {
    console.log(
      "from controller",
      req.profile_picture?.secure_url || req.profile_picture?.url
    );

    res.send("ok");

    // console.log(req.file);
    // console.log(req.files);
  }
);

userRouter.get("/random", (req, res, next) => {
  try {
    throw new ExpressError(401, `Some random error`);
  } catch (e) {
    next(e);
  }
});

userRouter.get("/me");
userRouter.patch(
  "/me",
  authorizeUserRole(),
  patchUserValidation(),
  validatorResult,
  userController.editUser
);

userRouter.delete("/me", authorizeUserRole(), userController.deleteUser);

userRouter.get(
  "/:id",
  authMiddleware,
  getUserIdParam(),
  validationResult,
  userController.getOneUser
);

export default userRouter;

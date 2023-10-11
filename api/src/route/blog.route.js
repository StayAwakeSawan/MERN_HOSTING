import { Router } from "express";
import Blog from "../model/blog.model.js";
import successHandler from "../utils/successHandler.js";
import { authorizeUserRole } from "../middlewares/authMiddleware.js";
import { blogController } from "../controller/blog.controller.js";
import paginationValidation from "../validator/global/paginationValidation.js";
import validatorResult from "../validator/validator.js";
import commentRouter from "./comment.route.js";
import { getBlogIdParamRequest } from "../validator/blog.validator.js";

const blogRouter = Router({ mergeParams: true });

blogRouter.post("/", authorizeUserRole(), blogController.post);

blogRouter.get(
  "/",
  paginationValidation(),
  validatorResult,
  blogController.get
);

blogRouter.get("/my", authorizeUserRole(), blogController.getByAuthor);

// api/blog/

blogRouter.use(
  "/:blogId/comment",
  getBlogIdParamRequest(),
  validatorResult,
  commentRouter
);

export default blogRouter;

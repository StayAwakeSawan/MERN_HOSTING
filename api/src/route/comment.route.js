import { Router } from "express";
import { commentController } from "../controller/comment.controller.js";
import { authorizeUserRole } from "../middlewares/authMiddleware.js";

const commentRouter = Router({ mergeParams: true });

commentRouter.post("/", authorizeUserRole(), commentController.post);
commentRouter.get("/", authorizeUserRole(), commentController.get);

commentRouter.patch(
  "/:commentId",
  authorizeUserRole(),
  commentController.patch
);

// api/blog/:blogid/comment
// api/blog/:blogid/comment/:commentId

export default commentRouter;

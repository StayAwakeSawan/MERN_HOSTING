import express from "express";
import userRouter from "./route/user.route.js";
import blogRouter from "./route/blog.route.js";

const mainRouter = express.Router({ mergeParams: true });

mainRouter.use("/user", userRouter);
mainRouter.use("/blog", blogRouter);

export default mainRouter;

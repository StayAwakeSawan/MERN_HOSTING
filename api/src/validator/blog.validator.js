import { param } from "express-validator";

export function getBlogIdParamRequest() {
  return [param("blogId", "Blog id must be valid").notEmpty().isMongoId()];
}

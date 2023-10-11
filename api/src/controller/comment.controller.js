import ExpressError from "../common/expressError.js";
import Blog from "../model/blog.model.js";
import Comment from "../model/comment.model.js";
import successHandler from "../utils/successHandler.js";

class CommentController {
  constructor() {
    this.post = this.post.bind(this);
    this.get = this.get.bind(this);
  }

  async doesBlogExists(blogId) {
    const exisitingBlog = await Blog.findById(blogId);
    if (!exisitingBlog) {
      throw new ExpressError(400, `Invalid blog.`);
    }
  }

  async post(req, res, next) {
    try {
      const exisitingBlog = await Blog.findById(req.params.blogId);
      if (!exisitingBlog) {
        throw new ExpressError(400, `Invalid blog.`);
      }

      const commentResponse = await new Comment({
        title: req.body.title,
        description: req.body.description,
        blog: req.params.blogId,
        user: req.user._id,
      }).save();

      return successHandler(
        res,
        commentResponse,
        "Comment posted successfully."
      );
    } catch (e) {
      next(e);
    }
  }

  async patch(req, res, next) {
    try {
      const exisitingComment = Comment.findOne({
        _id: commentId,
        user: req.user.id,
      });
    } catch (e) {
      next(e);
    }
  }

  async get(req, res, next) {
    try {
      const { blogId } = req.params;

      await this.doesBlogExists(blogId);

      const existingComment = await Comment.find({
        blog: blogId,
      }).populate({
        path: "user",
      });
      // .populate({ path: "blog" });

      return successHandler(res, existingComment);
    } catch (e) {
      next(e);
    }
  }
}

export const commentController = new CommentController();

import Blog from "../model/blog.model.js";
import BlogCategoryRel from "../model/blogCategoryRel.model.js";
import successHandler from "../utils/successHandler.js";

class BlogController {
  async post(req, res, next) {
    try {
      const { title, description, categoryId } = req.body;
      const authorId = req.user._id;

      const responseBlog = await new Blog({
        title,
        description,
        author: authorId,
      }).save();

      // const blogCategoryRelData = categoriesId.map((categoryId)=> {
      //   return {
      //     category: categoryId,
      //     blogId: responseId._id
      //   }
      // })

      // new BlogCategoryRel({
      //   blog: responseBlog._id,
      //   categoryId

      // })

      return successHandler(
        res,
        responseBlog,
        `Successfully created a blog`,
        201
      );
    } catch (e) {
      next(e);
    }
  }

  async get(req, res, next) {
    try {
      const { page, limit } = req.query;
      const blogsResponse = await Blog.find({})
        .populate({
          path: "author",
        })
        .skip((page - 1) * limit)
        .limit(limit);

      return successHandler(res, blogsResponse);
    } catch (e) {
      next(e);
    }
  }

  async getByAuthor(req, res, next) {
    try {
      const author = req.user._id;
      const blogsResponse = await Blog.find({ author }).populate({
        path: "author",
      });

      return successHandler(res, blogsResponse);
    } catch (e) {
      next(e);
    }
  }
}

export const blogController = new BlogController();

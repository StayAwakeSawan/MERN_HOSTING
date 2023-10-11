import ExpressError from "../common/expressError.js";
import User from "../model/user.model.js";
import { generateToken } from "../utils/jwt.utils.js";
import successHandler from "../utils/successHandler.js";

class UserController {
  getAll = async (req, res, next) => {
    try {
      const { page = 1, limit = 3 } = req.query;

      const offset = (page - 1) * limit;

      console.log(offset);

      const responseUser = await User.find({}).skip(offset).limit(limit);

      // page 1-- 1 to 10 page2== 11 to 20
      //limit 10

      return successHandler(res, responseUser, `all users`);
    } catch (e) {
      next(e);
    }
  };

  register = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = new User({ email, password });

      const responseUser = await user.save();

      // token creation
      const token = generateToken(responseUser.email, responseUser.id);

      return successHandler(res, { token }, `New user registered`, 201);
    } catch (e) {
      next(e);
    }
  };

  getOneUser = async (req, res, next) => {
    try {
      const { id } = req.params;

      const responseUser = await User.findById(id);
      return successHandler(res, { user: responseUser });
    } catch (e) {
      next(e);
    }
  };

  editUser = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await User.findByIdAndUpdate(
        req.user._id,
        {
          email: undefined,
          password,
        },
        { new: true }
      );

      return successHandler(res, user, "successfullyy edited");
    } catch (e) {
      next(e);
    }
  };

  deleteUser = async (req, res, next) => {
    try {
      const user = await User.findByIdAndDelete(req.user._id);

      return successHandler(res, user, "successfullyy deleted");
    } catch (e) {
      next(e);
    }
  };
}

export const userController = new UserController();

// const express = require("express");
import express from "express";
import morgan from "morgan";
import { logger } from "./src/middlewares/logger.js";
import db from "./src/config/db.js";
import User from "./src/model/user.model.js";
import mainRouter from "./src/main.route.js";
import { generateToken, verifyToken } from "./src/utils/jwt.utils.js";
import ExpressError from "./src/common/expressError.js";
import Category from "./src/model/cateory.model.js";
import BlogCategoryRel from "./src/model/blogCategoryRel.model.js";
import Blog from "./src/model/blog.model.js";
const PORT = 8080;

const app = express();

db();

app.use(express.json());

app.use(logger);

app.use((req, res, next) => {
  console.log("from application level middleware");
  next();
});

app.use("/api", mainRouter);

// postman, mongodb, mongodb compass,
app.use((err, req, res, next) => {
  if (err instanceof ExpressError) {
    return res.status(err.getStatus()).send({
      sucess: false,
      message: err.getMessage(),
    });
  }

  return res.status(400).send({
    success: false,
    message: err?.message || " Something went wrong.",
  });
});

app.listen(PORT, async () => {
  console.log("express server is running");

  // await Category.insertMany([
  //   {
  //     name: "trekking",
  //   },
  //   {
  //     name: "travel",
  //   },
  //   {
  //     name: "mountaineering",
  //   },
  //   {
  //     name: "hiking",
  //   },
  // ]);

  // const categoryBlogData = [
  //   {
  //     category: "651cf25b336304f38156b3b7",
  //     blog: "6513ba92a41c2259b6386d0b",
  //   },
  //   {
  //     category: "651cf25b336304f38156b3b8",
  //     blog: "6513ba92a41c2259b6386d0b",
  //   },
  //   {
  //     category: "651cf25b336304f38156b3b8",
  //     blog: "6513bb62a7d00d2c659a64f0",
  //   },
  //   {
  //     category: "651cf25b336304f38156b3ba",
  //     blog: "6513be7fbb794da5dfdda6ee",
  //   },
  // ];

  // await BlogCategoryRel.insertMany(categoryBlogData);

  // console.log(await BlogCategoryRel.find().populate(["blog", "category"]));

  // select * from TableA left Join TableB on tableA.id=tableB.someId

  const result = await Blog.aggregate([
    {
      $lookup: {
        from: "blogcategoryrels",
        localField: "_id",
        foreignField: "blog",
        as: "blog_category",
      },
    },

    {
      $unwind: {
        path: "$blog_category",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: "$_id",
        title: {
          $first: "$title",
        },
        description: {
          $first: "$description",
        },
        blog_category_doc: {
          $push: "$blog_category",
        },
      },
    },

    // {
    //   $lookup: {
    //     from: "categories",
    //     localField: "blog_category.category",
    //     foreignField: "_id",
    //     as: "finalResult",
    //   },
    // },

    // {
    //   $project: {
    //     _id: 1,
    //     title: 1,
    //     description: 1,
    //     // blog_category: 0,
    //     finalResult: "$blog_category.finalResult",
    //   },
    // },
  ]);

  // $sort $limit $skip $ match

  console.log(result);
  console.log(JSON.stringify(result, null, 2));
});

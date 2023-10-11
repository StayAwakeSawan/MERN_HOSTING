import { body, param } from "express-validator";

export const postUserValidation = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Email can not be empty")
      .isEmail()
      .withMessage("Email should be in correct format"),

    body("password")
      .notEmpty()
      .withMessage("Password can not be empty")
      .isLength({ min: 5, max: 100 })
      .withMessage("Password must be between 5 to 100 characters"),
  ];
};

export const getUserIdParam = () => {
  return [
    param("id")
      .notEmpty()
      .withMessage("Password can not be empty")
      .isMongoId()
      .withMessage("Id should be valid"),
  ];
};

export const patchUserValidation = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Email can not be empty")
      .isEmail()
      .withMessage("Email should be in correct format")
      .optional(),
    body("password")
      .notEmpty()
      .withMessage("Password can not be empty")
      .isLength({ min: 5, max: 100 })
      .withMessage("Password must be between 5 to 100 characters")
      .optional(),
  ];
};

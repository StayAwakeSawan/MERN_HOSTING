import { validationResult } from "express-validator";

export default function validatorResult(req, res, next) {
  const result = validationResult(req);

  // const e = result.errors?.reduce((acc, curr) => {
  //   acc.push(curr.msg);
  //   return acc;
  // }, []);
  // {
  //   password: {'', ''}
  //   email: {''
  // }

  if (result.errors?.length) {
    throw new Error(result.errors[0]?.msg);
  }

  next();
}

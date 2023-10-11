export default function successHandler(
  res,
  data = {},
  message = "success",
  status = 200
) {
  return res.status(status).send({
    success: true,
    message,
    data,
  });
}

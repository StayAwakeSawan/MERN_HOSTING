export function logger(req, res, next) {
  const start = Date.now();
  next();

  console.log(req.method, req.url, Date.now() - start, "ms");
}

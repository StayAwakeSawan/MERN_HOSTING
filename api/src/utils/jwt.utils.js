import jwt from "jsonwebtoken";

export function generateToken(email, id) {
  const token = jwt.sign({ email, id }, `12345678`);
  return token;
}

export function verifyToken(token) {
  const verification = jwt.verify(token, `12345678`);
  return verification;
}

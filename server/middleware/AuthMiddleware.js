import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    //console.log(req.headers);
    const secret = process.env.JWT;
    const token = req.headers.authorization.split(" ")[1];
    //console.log(token);
    if (token) {
      const decoded = jwt.verify(token, secret);
      console.log(decoded);
      req.body._id = decoded?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default authMiddleware;

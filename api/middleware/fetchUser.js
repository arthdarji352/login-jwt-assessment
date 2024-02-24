import jwt from "jsonwebtoken";
import "dotenv/config";

const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  console.log(token);

  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  try {
    const { userId } = jwt.verify(token, "" + process.env.JWT_SECRET);
    req.userId = userId;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

export default fetchUser;

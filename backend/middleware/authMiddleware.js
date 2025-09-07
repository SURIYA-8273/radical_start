import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader)
    return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing" });

  jwt.verify(token, config.jwt.secret, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
};

export const authorizeRole = (roles) => async (req, res, next) => {
  try {
    const [rows] = await db.query(
      "SELECT role FROM users WHERE id = ? LIMIT 1",
      [req.user.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const userRole = rows[0].role;

    if (!roles.includes(userRole)) {
      return res
        .status(403)
        .json({ message: "Forbidden: insufficient rights" });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

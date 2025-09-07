import mysql from "mysql2/promise";
import { config } from "./config.js";

const db = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.name,
  port:config.db.port,
   waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000,
});

(async () => {
  try {
    const connection = await db.getConnection();
    console.log(`MySQL connected to database: ${config.db.name}`);
    connection.release();
  } catch (error) {
    console.error("MySQL Database connection failed:", error.message);
  }
})();

export default db;

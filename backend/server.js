import express from "express";
import employeeRoutes from "./routes/employeeRoutes.js";
import { config } from "./config/config.js";

const app = express();
app.use(express.json());

app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => res.send("Employee API with JWT Auth Running"));

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});

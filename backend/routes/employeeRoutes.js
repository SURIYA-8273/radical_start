import express from "express";
import { upload } from "../middleware/upload.js";
import {
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  createEmployee,
} from "../controllers/employeeController.js";
// import { authenticate, authorizeRole } from "../middleware/authMiddleware.js";

const router = express.Router();

// router.post("/", authenticate, authorizeRole("admin"),upload.single("profile_image"), createEmployee);
// router.get("/", authenticate, getAllEmployees);
// router.get("/:id", authenticate, getEmployeeById);
// router.put("/:id", authenticate, authorizeRole("admin"),upload.single("profile_image"), updateEmployee);
// router.delete("/:id", authenticate, authorizeRole("admin"), deleteEmployee);

router.post("/", upload.single("profile_image"), createEmployee);
router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", upload.single("profile_image"), updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;

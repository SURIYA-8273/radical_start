import db from "../config/db.js";
import { config } from "../config/config.js";

export const insertEmployee = async (employee) => {
  const [result] = await db.query(
    `INSERT INTO ${config.tables.employees} 
     (name, department, designation, employee_id, project_name, status, type, profile_image)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      employee.name,
      employee.department,
      employee.designation,
      employee.employeeId,
      employee.project,
      employee.status,
      employee.type,
      employee.profile_image,
    ]
  );
  return result.insertId;
};

export const updateEmployee = async (id, employee) => {
  const [result] = await db.query(
    `UPDATE ${config.tables.employees}
     SET name=?, department=?, designation=?, employee_id=?, project_name=?, status=?, type=?, profile_image=?
     WHERE id=?`,
    [
      employee.name,
      employee.department,
      employee.designation,
      employee.employeeId,
      employee.project,
      employee.status,
      employee.type,
      employee.profile_image,
      id,
    ]
  );
  return result.affectedRows;
};

export const getAllEmployees = async () => {
  const [rows] = await db.query(`SELECT * FROM ${config.tables.employees}`);
  return rows;
};

export const getEmployeeById = async (id) => {
  const [rows] = await db.query(
    `SELECT * FROM ${config.tables.employees} WHERE id = ?`,
    [id]
  );
  return rows[0];
};

export const deleteEmployee = async (id) => {
  const [result] = await db.query(
    `DELETE FROM ${config.tables.employees} WHERE id=?`,
    [id]
  );
  return result.affectedRows;
};

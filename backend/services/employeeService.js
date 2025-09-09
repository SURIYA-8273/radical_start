import {
  insertEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../models/employeeModel.js";

export const addEmployee = async (employeeData) => {
  return await insertEmployee(employeeData);
};

export const findAllEmployees = async (search) => {
  return await getAllEmployees(search);
};

export const findEmployeeById = async (id) => {
  return await getEmployeeById(id);
};

export const editEmployee = async (id, employeeData) => {
  return await updateEmployee(id, employeeData);
};

export const removeEmployee = async (id) => {
  return await deleteEmployee(id);
};

import {
  addEmployee,
  editEmployee,
  removeEmployee,
  findAllEmployees,
  findEmployeeById,
} from "../services/employeeService.js";

export const createEmployee = async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);

    const employeeData = {
      ...data,
      profile_image: req.file ? req.file.path : null,
    };

    const id = await addEmployee(employeeData);
    res.status(201).json({ message: "Employee created", id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);

    const employeeData = {
      ...data,
      profile_image: req.file ? req.file.path : null,
    };

    const affectedRows = await editEmployee(req.params.id, employeeData);

    if (!affectedRows) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Employee updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await findAllEmployees();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const employee = await findEmployeeById(req.params.id);
    if (!employee) return res.status(404).json({ message: "Not found" });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const affectedRows = await removeEmployee(req.params.id);
    if (!affectedRows) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

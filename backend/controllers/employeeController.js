import {
  addEmployee,
  editEmployee,
  removeEmployee,
  findAllEmployees,
  findEmployeeById,
} from "../services/employeeService.js";

export const createEmployee = async (req, res) => {
  try {
    console.log(req.body);

    const data = JSON.parse(req.body.data);
    console.log(req.file);
    const employeeData = {
      ...data,
      profile_image: req.file ? req.file.path : null,
    };

    const id = await addEmployee(employeeData);
    res.status(201).json({
      status: true,
      message: "Employee created successfully",
      data: null,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);
    const employee = await findEmployeeById(data.id);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    const employeeData = {
      ...data,
      profile_image: req.file ? req.file.path : employee.profile_image,
    };

    const affectedRows = await editEmployee(req.params.id, employeeData);

    if (!affectedRows) return res.status(404).json({ message: "Not found" });
    res.json({
      message: "Employee updated successfully",
      success: true,
      data: null,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const { search } = req.query;
    const employees = await findAllEmployees(search);
    res.json({
      status: true,
      message: "Employees retrieved successfully",
      data: employees,
    });
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
    res.json({
      message: "Employee deleted successfully",
      success: true,
      data: null,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

CREATE DATABASE IF NOT EXISTS radical_start;

USE radical_start;

CREATE TABLE IF NOT EXISTS employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  department VARCHAR(100),
  designation VARCHAR(100),
  employee_id VARCHAR(50) UNIQUE,
  project_name VARCHAR(100),
  status ENUM('permanent', 'temporary') DEFAULT 'permanent',
  type ENUM('online', 'offline') DEFAULT 'offline',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE employees
ADD COLUMN profile_image VARCHAR(255);
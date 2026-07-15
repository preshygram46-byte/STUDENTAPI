const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");

// Get all students
router.get("/", studentController.getStudents);

// Get student by ID
router.get("/:id", studentController.getStudent);

// Add a student
router.post("/", studentController.addStudent);

// Update a student
router.put("/:id", studentController.updateStudent);

// Delete a student
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
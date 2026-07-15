const students = require("../data/students");

// Get all students
exports.getStudents = (req, res) => {
    res.json(students);
};

// Get one student by ID
exports.getStudent = (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
};

// Add a new student
exports.addStudent = (req, res) => {

    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };

    students.push(student);

    res.status(201).json(student);
};

// Update student
exports.updateStudent = (req, res) => {

    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.age = req.body.age;
    student.course = req.body.course;

    res.json(student);
};

// Delete student
exports.deleteStudent = (req, res) => {

    const index = students.findIndex(s => s.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
};
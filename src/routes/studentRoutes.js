const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Verifique se a linha 5 está usando exatamente o "getAllStudents"
router.get('/', studentController.getAllStudents);
router.post('/students', studentController.createStudent);
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;

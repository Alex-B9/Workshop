const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/tasksController');

router.get('api/tasks', taskCtrl.getTasks);
router.post('api/tasks/add', taskCtrl.addTask);
router.delete('api/tasks/delete/:id', taskCtrl.deleteTask);
router.put('api/tasks/update/:id', taskCtrl.updateTask);

module.exports = router;
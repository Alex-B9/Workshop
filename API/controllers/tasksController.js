const Task = require('../models/Task');
const catchAsync = require('../helpers/catchAsync');

// Method GET
const getTasks = catchAsync(async (req, res) => {
    res.json({ message: "coucou" })
    // const tasks = await Task.find();
    // if (tasks.length) {
    //     res.status(200).json({
    //         status: 'success',
    //         data: tasks
    //     });
    // } else {
    //     res.status(404).json({
    //         status: 'fail',
    //         message: "No tasks found."
    //     });
    // }
});

// Method ADD
const addTask = catchAsync(async (req, res) => {
    const title = req.body.title;

    if (!title) {
        return res.status(404).json({
            status: 'fail',
            message: "Title is required."
        });
    } else {
        const task = await Task.create({
            title
        });
        res.status(200).json({
            status: 'success',
            data: task
        });
    }
});

// Method UPDATE
const updateTask = catchAsync(async (req, res) => {
    const id = req.params.id;
    const done = req.body.done;
    const task = await Task.findByIdAndUpdate(id, { done });
    if (task) {
        res.status(200).json({
            status: 'success',
            data: task
        });
    } else {
        res.status(404).json({
            status: 'fail',
            message: 'Task not found.'
        });
    }
});

// Method DELETE
const deleteTask = catchAsync(async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id);
    if (task) {
        res.status(200).json({
            status: 'success',
            data: task
        });
    } else {
        res.status(404).json({
            status: 'fail',
            message: 'Task not found.'
        });
    }
});

// Export of modules
module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask
}
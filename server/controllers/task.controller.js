import mongoose from 'mongoose';
import Task from '../models/task.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ creator: req.userName });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTask = async (req, res) => {
    const task = req.body;

    const newTask = new Task({ ...task, creator: req.userName, createdAt: new Date().toISOString(), completed: false });
    try {
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTask = async (req, res) => {
    const { id: _id } = req.params;

    const task = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No task with that id");

    const updatedPost = await Task.findByIdAndUpdate(_id, { ...task, _id }, { new: true });

    res.json(updatedPost);
}

export const deleteTask = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No task with that id");

    await Task.findByIdAndRemove(_id);

    res.json({ message: 'Post Task successfully' })

}

import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    name: String,
    completed: Boolean,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Task = mongoose.model('Task', taskSchema);
export default Task;
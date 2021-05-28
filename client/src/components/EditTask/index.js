import { Button, Paper, Typography, InputBase } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';
import { updateTask, getTasks } from '../../actions/task';
import { useDispatch } from 'react-redux';


const EditTask = ({ handleClose, currentTaskId, tasks }) => {
    const classes = useStyles();
    const task = tasks.find(task => task._id === currentTaskId);
    const [name, setName] = useState(task.name);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateTask(currentTaskId, { ...task, name }));
        setName('');
        handleClose();
        dispatch(getTasks());
    }

    return (
        <div className={classes.outer}>
            <Paper className={classes.container} sm={12}>
                <Typography className={classes.heading} >
                    Edit Task
                </Typography>
                <InputBase
                    className={classes.text}
                    name="name"
                    placeholder="Task Name"
                    value={name}
                    onChange={handleChange}
                />
                <Button variant="contained" onClick={handleSubmit} color="primary">
                    Edit Task
                </Button>
            </Paper>
        </div >
    );
}

export default EditTask;

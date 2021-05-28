import { Button, Paper, Typography, InputBase } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';
import { createTask, getTasks } from '../../actions/task';
import { useDispatch } from 'react-redux';


const CreateTask = ({ handleClose }) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createTask({ name }));
        setName('');
        handleClose();
        dispatch(getTasks());

    }

    return (
        <div className={classes.outer}>
            <Paper className={classes.container} sm={12}>
                <Typography className={classes.heading} >
                    + New Task
                </Typography>
                <InputBase
                    className={classes.text}
                    name="name"
                    placeholder="Task Name"
                    value={name}
                    onChange={handleChange}
                />
                <Button variant="contained" onClick={handleSubmit} color="primary">
                    + New Task
                </Button>
            </Paper>
        </div >
    );
}

export default CreateTask;

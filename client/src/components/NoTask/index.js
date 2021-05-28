import { Button, Paper, Typography, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';
import CreateTask from '../CreateTask';

const NoTask = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = (e) => {
        setOpen(true);
    };

    const handleClose = (e) => {
        setOpen(false);
    };

    return (
        <div className={classes.outer}>
            <Paper className={classes.container} sm={12}>
                <Typography className={classes.heading} >
                    You have no task.
                </Typography>
                <Button variant="contained" onClick={handleOpen} color="primary">
                    + New Task
                </Button>
            </Paper>
            <Modal
                sm={12}
                open={open}
                onClose={handleClose}
                className={classes.modal}
            >
                <CreateTask handleClose={handleClose} />
            </Modal>
        </div >

    );
}

export default NoTask;

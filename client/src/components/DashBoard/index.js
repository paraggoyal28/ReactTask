import { Paper, Typography, Table, Grid, TableBody, TableCell, Modal, Button, InputBase, TableRow, Checkbox, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar';
import useStyles from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import PenIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import CreateTask from '../CreateTask';
import { deleteTask, getTasks, updateTask } from '../../actions/task';
import NoTask from '../NoTask';
import EditTask from '../EditTask';
import PieChart from '../PieChart';
const DashBoard = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [currentTaskId, setCurrentTaskId] = useState(null);
    const tasks = useSelector((state) =>
        state.tasks
    );

    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [searchText, setSearchText] = useState('');
    const handleClick = (event, _id) => {
        event.preventDefault();
        const task = tasks.find(task => task._id === _id);
        dispatch(updateTask(_id, { ...task.name, completed: !task.completed }));

    }

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        const filterTasks = tasks.filter(task => task.name.includes(searchText));
        setFilteredTasks(filterTasks);
    }

    const handleDelete = (event, _id) => {
        event.preventDefault();
        const task = tasks.find(task => task._id === _id);
        dispatch(deleteTask(_id));
    }

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    const handleEdit = (e, _id) => {
        setOpenEditModal(true);
        setCurrentTaskId(_id);
    };

    const handleEditClose = (e) => {
        setOpenEditModal(false);
    }

    const handleOpen = (e) => {
        setOpen(true);
    };

    const handleClose = (e) => {
        setOpen(false);
    };
    const completedTasks = tasks && tasks.filter(task => task.completed);
    const latestTasks = tasks && tasks.sort((a, b) => a.createdAt - b.createdAt);
    const tasksToDisplay = searchText.length >= 1 ? filteredTasks : tasks;
    return (
        <div className={classes.page}>
            <NavBar />
            {tasks && tasks.length ? (
                <>

                    <Grid className={classes.container} container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        spacing={3}
                    >

                        <Paper className={classes.first} elevation={2} sm={12}>
                            <Typography className={classes.title} gutterBottom>
                                Tasks Completed
                            </Typography>
                            <Typography className={classes.title}>
                                <span className={classes.highlight}>{completedTasks.length}</span> / {tasks.length}
                            </Typography>
                        </Paper>
                        <Paper className={classes.first} elevation={2} sm={12}>
                            <Typography className={classes.title} gutterBottom>
                                Latest Created Tasks
                            </Typography>
                            {latestTasks.slice(0, 3).map(task => (
                                <Typography key={task._id} className={task.completed ? classes.completedLatest : classes.latest}>
                                    <span className={classes.bullet}>•</span>{task.name}
                                </Typography>))}
                        </Paper>

                        <Paper className={classes.second} elevation={2} sm={12} >
                            <PieChart completedTasks={completedTasks.length} incompletedTasks={tasks.length - completedTasks.length} className={classes.chart} />
                        </Paper>
                    </Grid>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        className={classes.modal}
                    >
                        <CreateTask handleClose={handleClose} />
                    </Modal>
                    <Modal
                        open={openEditModal}
                        onClose={handleEditClose}
                        className={classes.modal}
                    >
                        <EditTask handleClose={handleEditClose} tasks={tasks} currentTaskId={currentTaskId} />
                    </Modal>
                    <div className={classes.flexBox} sm={12}>
                        <Typography className={classes.title} sm={12}>
                            Tasks
                        </Typography>
                        <div className={classes.flexInBox} sm={12}>
                            <Paper className={classes.searchBox} sm={12}>
                                <IconButton onClick={handleSearch}><SearchIcon /></IconButton>
                                <InputBase
                                    type="search"
                                    name="Search box"
                                    placeholder="Search by task name"
                                    onChange={handleSearchChange}
                                    value={searchText}
                                />
                            </Paper>
                            <Button sm={12} variant="contained" onClick={handleOpen} color="primary">
                                + New Task
                            </Button>
                        </div>
                    </div>
                    <Paper className={classes.tableContainer}>
                        <Table
                            className={classes.table}
                            size='medium'
                        >
                            <TableBody>
                                {tasksToDisplay.map(task => {
                                    return (
                                        <TableRow
                                            hover

                                            role="checkbox"
                                            className={classes.row}
                                            tabIndex={-1}
                                            key={task._id}
                                            sm={12}
                                        >

                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    onClick={(event) => handleClick(event, task._id)}
                                                    className={classes.checkbox}
                                                    checked={task.completed}
                                                />
                                            </TableCell>
                                            <TableCell component="td" scope="row" padding="none" className={task.completed ? classes.completed : classes.cell}>
                                                {task.name}
                                            </TableCell>
                                            <TableCell component="id" scope="row" align="right" className={classes.modifiers}>
                                                <IconButton onClick={(event) => handleEdit(event, task._id)}><PenIcon /></IconButton>
                                                <IconButton onClick={(event) => handleDelete(event, task._id)}><DeleteIcon /></IconButton>
                                            </TableCell>


                                        </TableRow>
                                    );
                                })}

                            </TableBody>
                        </Table>
                    </Paper>
                </>
            ) : (
                <div className={classes.secondContainer} >
                    <NoTask />
                </div>
            )}

        </div>
    )
}

export default DashBoard;

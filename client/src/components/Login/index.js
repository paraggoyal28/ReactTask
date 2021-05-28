import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../../actions/auth';

const initialState = { apiKey: '', name: '' };


const LoginComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(formData, history));
        setFormData(initialState);

    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid component="item" className={classes.grid} sm={12} lg={4}>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <div>
                            <Typography className={classes.title} gutterBottom>
                                Login
                            </Typography>
                        </div>
                        <div>
                            <InputBase
                                className={classes.text}
                                name="apiKey"
                                placeholder="Id"
                                fullWidth
                                value={formData.apiKey}
                                onChange={handleChange}
                            />
                            <InputBase
                                className={classes.text}
                                name="name"
                                placeholder="Name"
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <Button className={classes.button} variant="contained" color="primary" size="large" type="submit" fullWidth>
                            Login
                    </Button>
                    </CardContent>
                </Card>
            </Grid>
        </form>
    );
}

export default LoginComponent;
import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, Toolbar, Button } from '@material-ui/core';
import useStyles from './styles';
import { useHistory, useLocation } from 'react-router-dom';
import profile from '../../images/profile.png';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { LOGOUT } from '../../constants/actionTypes';


const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    useEffect(() => {
        const token = user?.token?.token;
        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const logout = () => {
        dispatch({ type: LOGOUT });
        history.push('/');
        setUser(null);
    }

    return (
        <AppBar className={classes.appBar} color="inherit">
            <div className={classes.brandContainer}>
                <img src={profile} alt="profilepic" height="60" />
                <span className={classes.name}>{user.token.name}</span>
            </div>
            <Toolbar className={classes.toolbar}>
                <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
            </Toolbar>
        </AppBar>
    )
}


export default Navbar;

import { combineReducers } from 'redux';
import authData from './auth';
import tasks from './task';
export default combineReducers({
    authData,
    tasks,
});
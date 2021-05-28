import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const signin = (formData, history) => async (dispatch) => {
    try {
        // login the user
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        history.push('/dashboard');

    } catch (error) {
        console.log(error);
    }
}


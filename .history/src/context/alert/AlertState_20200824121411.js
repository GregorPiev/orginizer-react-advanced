import React, { useReducer } from 'react';
import { AlertContext } from './alertContext';
import { alertReducer } from './alertReducer';
import { SHOW_ALERT } from '../type';


export const AlertState = ({ children }) => {
    const [state, dispatch] = useReducer(alertReducer, { visible: false });
    const show = (text, type = 'warning') => {
        dispatch({
            type: SHOW_ALERT,
            payload: { text, type }
        })
    }

    const show = (text, type = 'warning') => {
        dispatch({
            type: SHOW_ALERT,
            payload: { text, type }
        })
    }
    return (
        <AlertContext.Provider>
            {children}
        </AlertContext.Provider>
    )
}
import React, { useReducer } from 'react';
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer';
import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from '../type';

const url = process.env.REACT_APP_DB_URL;
export const FirebaseState = ({ children }) => {
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const show_alert = () => {
        dispatch({
            type: SHOW_LOADER
        })
    }

    const add_note = (note) => {
        dispatch({
            type: ADD_NOTE,
            payload: note
        })
    }

    const fetch_note = (notes) => {
        dispatch({
            type: FETCH_NOTES,
            payload: notes
        })
    }
    const remove_note = (id) => {
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }

    return (
        <FirebaseContext.Provider value={{
            show_alert, add_note, fetch_note, remove_note
        }}>
            {children}
        </FirebaseContext.Provider >
    )
}
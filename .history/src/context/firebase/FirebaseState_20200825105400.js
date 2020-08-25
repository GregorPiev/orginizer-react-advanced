import React, { useReducer } from 'react';
import axios from 'axios';
import chalk from 'chalk';
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

    const showLoader = () => dispatch({ type: SHOW_LOADER });
    const fetchNotes = async () => {
        showLoader();
        const res = await axios.get(`${url}/notes.json`);
        console.log(chalk.redBright('fetchNotes:', res.data));
        /* dispatch({
            type: FETCH_NOTES,
            payload: res.data
        }) */
    }
    const addNote = (title) => {
        const note = {
            title,
            date: new Date().toJSON()
        }
        cont res = await axios.post(`${url}/note.json`, note);
        console.log(chalk.yellow('addNote:', res.data));

        /* dispatch({
            type: ADD_NOTE,
            payload: note
        }) */
    }


    const removeNote = (id) => {
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, addNote, fetchNotes, removeNote
        }}>
            {children}
        </FirebaseContext.Provider >
    )
}
import React, { useReducer } from 'react';
import axios from 'axios';
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

    const addNote = (note) => {
        dispatch({
            type: ADD_NOTE,
            payload: note
        })
    }

    const fetchNotes = (notes) => {
        dispatch({
            type: FETCH_NOTES,
            payload: notes
        })
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
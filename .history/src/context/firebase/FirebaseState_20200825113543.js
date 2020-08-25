import React, { useReducer } from 'react';
import axios from 'axios';
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer';
import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from '../type';

const url = 'https://organiser-react-advansed.firebaseio.com';//process.env.REACT_APP_DB_URL;
console.log('%cFirebaseState URL:' + url, 'color: red');
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
        console.log('%cfetchNotes:' + res.data, 'color: blue');
        /* dispatch({
            type: FETCH_NOTES,
            payload: res.data
        }) */
    }
    const addNote = async (title) => {
        try {
            const note = {
                title,
                date: new Date().toJSON()
            };
            const res = await axios.post(`${url}/notes.json`, note);
            console.log('%caddNote:' + res.data, 'color: yellow');
        } catch (error) {

        }


        /* dispatch({
            type: ADD_NOTE,
            payload: note
        }) */
    }


    const removeNote = async (id) => {
        await axios.delete(`${url}/notes/${id}.json`)

        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, addNote, fetchNotes, removeNote,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider >
    )
}
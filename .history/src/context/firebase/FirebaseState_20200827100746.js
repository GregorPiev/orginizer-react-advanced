import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer';
import { AlertContext } from '../alert/alertContext';
import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from '../type';

const { alert } = useContext(AlertContext);

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
        console.log('fetchNotes:', res.data);
        const payload = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })
        dispatch({
            type: FETCH_NOTES,
            payload
        })
    }
    const addNote = async (title) => {
        const note = {
            title,
            date: new Date().toJSON()
        };

        try {
            const res = await axios.post(`${url}/notes.json`, note);
            const payload = {
                ...note,
                id: res.data.name
            }

            dispatch({
                type: ADD_NOTE,
                payload
            })

        } catch (error) {
            throw Error(error.message);
        }
    }


    const removeNote = async (id) => {
        try {
            await axios.delete(`${url}/notes/${id}.json`)
                .then(res => {
                    console.log('Result note delete:', res);
                    alert.show('Note was deleted', 'success')
                })
                .error(err => {
                    console.log('Error delete:', err);
                    alert.show(`Error delete:${err}`, 'error')
                })

            dispatch({
                type: REMOVE_NOTE,
                payload: id
            })
        } catch (error) {
            alert.show(`Error remove:${error.message}`, 'error')
        }

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
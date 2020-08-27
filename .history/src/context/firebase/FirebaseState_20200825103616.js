import React, { useReducer } from 'react';
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer';
import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from '../type';

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

    const add_note = (note) = {
        dispatch({
            type: ADD_NOTE,
            payload: { note.content
    }
})
    }
const fetch_note = (notes) = {
    dispatch({
        type: FETCH_NOTES,
        payload: notes
    })
}
const add_note = (note) = {
    dispatch({
        type: ADD_NOTE,
        payload: { note.content
}
        })
    }

return (
    <FirebaseContext.Provider value={{
        show_alert,
        add_note
    }}>
        {children}
    </FirebaseContext.Provider >
)
}
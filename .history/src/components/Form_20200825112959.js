import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const submitHandler = event => {
        event.preventDefault();

        if (value.trim()) {
            firebase.addNote(value);
            alert.show('Comment has been created', 'success');
            setValue('');
        } else {
            alert.show('Enter context');
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter value"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </div>
        </form>
    )
}
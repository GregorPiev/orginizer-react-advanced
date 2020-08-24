import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);

    const submitHandler = event => {
        event.preventDefault();

        alert.show(value, 'success');
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
import React, { useState, useContext } from 'react';

export const Form = () => {
    const [value, setValue] = useState('');

    const submitHandler = event => {
        event.preventDefault();
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
import React, { useState, useContext } from 'react';

export const Form = () => {
    const [value, setValue] = useState('');


    return (
        <form>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter value" />
            </div>
        </form>
    )
}
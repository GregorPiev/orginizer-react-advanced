import React, { useState, useContext } from 'react';

export const Form = () => {

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
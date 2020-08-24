import React from 'react';

export const Alert = ({ alert }) => {

    return (
        <div className={`alert alert-warning alert-dismissible`}>
            <strong>Alert!</strong>
            {alert.text}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
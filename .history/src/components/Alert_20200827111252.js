import React, { useContext, useRef } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { CSSTransition } from 'react-transition-group';

export const Alert = () => {
    const { alert, hide } = useContext(AlertContext);

    /* if (!alert.visible) {
        return null;
    } */
    return (
        <CSSTransition
            in={alert.visible}
            timeout={750}
            ref={useRef('Alert')}
            mountOnEnter
            unmountOnExit
        >
            <div ref='Alert' className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Alert!</strong>&nbsp;
            {alert.text}
                <button onClick={hide} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}
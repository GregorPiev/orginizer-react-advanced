import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { CSSTransition } from 'react-transition-group';

export const Alert = () => {
    const { alert, hide } = useContext(AlertContext);

    /* if (!alert.visible) {
        return null;
    } */
    return (
        <CSSTransition
            unmountOnExit
            mountOnEnter
            in={alert.visible}
            timeout={{ appear: 300, enter: 750, exit: 300 }}
            classNames='comment'
            appear
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Alert!</strong>&nbsp;
            {alert.text}
                <button onClick={hide} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}
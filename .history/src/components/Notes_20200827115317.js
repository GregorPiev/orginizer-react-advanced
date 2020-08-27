import React from 'react';
import './ComponentsStyle.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Notes = ({ notes, onRemove }) => (
    <TransitionGroup component="ul" className="list-group">
        {notes.map(note => (
            <CSSTransition
                key={note.id}
                classNames={'note'}
            >
                <li className="list-group-item note">
                    <div>
                        <strong>{note.title}</strong>
                        <small>{new Date(note.date).toLocaleDateString('he-IL')} &nbsp; {new Date(note.date).toLocaleTimeString('he-IL')}</small>
                    </div>

                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => onRemove(note.id)}
                    >
                        &times;
                        </button>
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>

)
import React from 'react';
import './ComponentsStyle.scss';

export const Notes = ({ notes }) => {

    return (
        <ul className="list-group">
            {notes.map(note => (
                <li
                    key={note.id}
                    className="list-group-item note">
                    <div>
                        <strong>{note.title}</strong>
                        <small>{new Date().toLocaleDateString()} &nbsp; {new Date().toLocaleTimeString()}</small>
                    </div>

                    <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
                </li>
            ))}
        </ul>
    )
}
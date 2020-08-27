/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useContext, useEffect } from 'react';
import { Form } from '../../components/Form';
import { Notes } from '../../components/Notes';
import './Home.scss';
import { FirebaseContext } from '../../context/firebase/firebaseContext';
import { AlertContext } from '../../context/alert/alertContext';
import { Loader } from '../../components/Loader'

export const Home = () => {
    const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext);
    const alert = useContext(AlertContext);

    useEffect(() => {
        fetchNotes()
    }, []);

    function removeItemNote(id) {
        console.log('Note should delete:', id);
        try {
            removeNote(id)
                .then(res => {
                    console.log('Result delete Note:', res);
                    alert.show('Comment has been deleted', 'success');
                },
                    error => {
                        alert.show(`Error within deleting comment: ${error.message}`, 'success');
                    }
                )
        } catch (error) {

        }
    }

    return (
        <Fragment >
            <h1 className="home">Home</h1>
            <Form />
            <hr />
            {
                loading
                    ? <Loader />
                    : <Notes notes={notes} onRemove={(id) => removeItemNote(id)} />
            }

        </Fragment>
    )
}
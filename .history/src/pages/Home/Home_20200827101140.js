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
    const { alert } = useContext(AlertContext);

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <Fragment >
            <h1 className="home">Home</h1>
            <Form />
            <hr />
            {
                loading
                    ? <Loader />
                    : <Notes notes={notes} onRemove={removeNote} />
            }

        </Fragment>
    )
}
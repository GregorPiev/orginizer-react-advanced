/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useContext, useEffect } from 'react';
import { Form } from '../../components/Form';
import { Notes } from '../../components/Notes';
import './Home.scss';
import { FirebaseContext } from '../../context/firebase/firebaseContext';

export const Home = () => {
    const { loading, notes, fetchNotes } = useContext(FirebaseContext);

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
                    : <Notes notes={notes} />
            }

        </Fragment>
    )
}
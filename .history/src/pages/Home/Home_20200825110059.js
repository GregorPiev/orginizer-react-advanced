import React, { Fragment, useContext } from 'react';
import { Form } from '../../components/Form';
import { Notes } from '../../components/Notes';
import './Home.scss';
import { FirebaseContext } from '../../context/firebase/firebaseContext';

export const Home = () => {
    const { } = useContext(FirebaseContext);
    return (
        <Fragment >
            <h1 className="home">Home</h1>
            <Form />
            <hr />
            <Notes notes={notes} />
        </Fragment>
    )
}
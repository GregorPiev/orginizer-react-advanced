import React, { Fragment } from 'react';
import { Form } from '../../components/Form';
import { Notes } from '../../components/Notes';
import './Home.scss';

export const Home = () => {
    const notes = new Array(3)
        .fill('')
        .map((_, i) => ({ id: i, title: `Note ${i + 1}` }))
    return (
        <Fragment >
            <h1 className="home">Home</h1>
            <Form />
            <hr />
            <Notes notes={notes} />
        </Fragment>
    )
}
import React, { Fragment } from 'react';
import { Form } from '../../components/Form';
import './Home.scss';

export const Home = () => {
    return (
        <Fragment >
            <h1 className="home">Home</h1>
            <Form />
        </Fragment>
    )
}
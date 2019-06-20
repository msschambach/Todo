import React, { Component, Fragment } from 'react';
import Todo from './components/Todo';

export default class App extends Component {

    render() {
        return (
            <Fragment>
                <Todo />
            </Fragment>
        );
    }
}
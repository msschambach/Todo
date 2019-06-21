import React, { Component, Fragment } from 'react';
import Todo from './components/todo/Todo';

interface AppProps { }

interface AppState { }

export default class App extends Component<AppProps, AppState> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Todo />
            </Fragment>
        );
    }
}
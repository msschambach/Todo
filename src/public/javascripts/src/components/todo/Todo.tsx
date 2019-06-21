import React, { Component } from 'react';
//import update from 'immutability-helper';
import './todo.scss';

export interface TodoItem {
    text: String
    done: Boolean
    created: Date
}

export interface TodoProps { }

export interface TodoState {
    todoList: Array<TodoItem>
}

export default class Todo extends Component<TodoProps, TodoState> {

    state: TodoState = {
        todoList: [],
    }

    constructor(props) {
        super(props);
    }

    addItem = (event) => {

        event.preventDefault();

        const newItemText = event.target.elements.todo_item.value;
        const currentTodoList = this.state.todoList;

        this.setState({
            todoList: [
                ...currentTodoList,
                {
                    text: newItemText,
                    done: false,
                    created: new Date()
                }
            ]
        });

        event.target.reset();
    }

    removeItem = (event) => {

        const NewTodoList = this.state.todoList.filter((item) => {
            return item.text !== event.target.dataset.value
        });

        this.setState({
            todoList: [
                ...NewTodoList
            ]
        });
    }

    toggleDoneState = (event) => {
        const NewTodoList = this.state.todoList;
        const ItemIndex = NewTodoList.findIndex((item) => {
            return item.text === event.target.value
        });

        NewTodoList[ItemIndex].done = !NewTodoList[ItemIndex].done
        this.setState({
            todoList: NewTodoList
        });
    }

    render() {
        return (
            <div className='todo'>

                <form onSubmit={this.addItem}>
                    <input type="text" name="todo_item" placeholder="Add todo item..." autoComplete='off' />
                </form>

                <ul className="items">
                    {this.state.todoList.map((item, index) => {
                        return (
                            <li className="item" key={index}>
                                <input onChange={this.toggleDoneState} type="checkbox" value={`${item.text}`} />
                                <span className={`item-text ${item.done ? 'done' : ''}`}>{item.text}</span>
                                <button data-value={item.text} onClick={this.removeItem}>Remove</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
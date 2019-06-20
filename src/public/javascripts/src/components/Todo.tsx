import React, { Component } from 'react';

export interface TodoItem {
    text: String
}

export interface TodoProps { }

export interface TodoState {
    todoList: Array<TodoItem>
}

export default class Todo extends Component<TodoProps, TodoState> {

    state: TodoState = {
        todoList: []
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
                    text: newItemText
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

    render() {
        return (
            <div className='todo'>

                <form onSubmit={this.addItem}>
                    <input type="text" name="todo_item" placeholder="Add todo item..." autoComplete='off' />
                </form>

                <div className="items">
                    {this.state.todoList.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>{item.text}</p>
                                <button data-value={item.text} onClick={this.removeItem}>Remove</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
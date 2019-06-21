import React, { Component } from 'react';
import todoService from './TodoService';

export interface TodoItem {
    id: number
    text: string
    done: boolean
    createdAt?: Date
    updatedAt?: Date
}

export interface TodoProps { }

export interface TodoState {
    todoList: Array<TodoItem>
}

export default class Todo extends Component<TodoProps, TodoState> {

    state: TodoState = {
        todoList: []
    }

    componentWillMount() {
        this.fetch();
    }

    fetch = () => {
        todoService.getAll()
            .then(response => response.json())
            .then(items => {
                this.setState({
                    todoList: items
                });
            });
    }

    addItem = (event) => {

        event.preventDefault();
        const currentTodoList = this.state.todoList;

        let $this = this;

        todoService.add({
            text: event.target.elements.todo_item.value,
            done: false
        })
            .then(response => response.json())
            .then(newItem => {
                console.log("Saved item to the db...", newItem);
                $this.setState({
                    todoList: [
                        ...currentTodoList,
                        newItem
                    ]
                });
            });

        event.target.reset();
    }

    removeItem = (event) => {

        event.preventDefault();

        const Item = this.state.todoList.find((item) => {
            return item.id == parseInt(event.target.dataset.identifier)
        });

        let $this = this;

        todoService.remove(Item)
            .then(response => response.json())
            .then(result => {
                $this.fetch();
            });
    }

    toggleDoneState = (event) => {
        const Item = this.state.todoList.find((item) => {
            return item.id === parseInt(event.target.value)
        });

        let $this = this;

        todoService.update({
            ...Item,
            done: !Item.done
        }).finally(() => {
            $this.fetch();
        })


    }

    render() {
        return (
            <div className='todo'>

                <form onSubmit={this.addItem}>
                    <input type="text" name="todo_item" placeholder="Add todo item..." autoComplete='off' />
                </form>

                {(this.state.todoList.length > 0) ? (
                    <ul className="collection">
                        {this.state.todoList.map((item, index) => {
                            return (
                                <li className="collection-item" key={index}>
                                    <label>
                                        <input onChange={this.toggleDoneState} type="checkbox" value={`${item.id}`} />
                                        <span className={item.done ? 'done' : ''}>{item.text}</span>
                                    </label>
                                    <a href="#!" className="secondary-content">
                                        <i className="material-icons" data-identifier={item.id} onClick={this.removeItem}>delete</i>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                ) : null}
            </div>
        );
    }
}
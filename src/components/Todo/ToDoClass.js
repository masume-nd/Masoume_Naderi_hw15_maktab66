import React, {Component} from 'react';
import {RiCloseCircleLine, RiCheckboxCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";
import TodoForm from "../todoForm/todoForm";
import Todoformclass from '../todoForm/TodoFormClass';
import "./Todo.css";

class Todoclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: {
                id: null,
                value: ""
            }
        }
    }

    submitUpdate = (value) => {
        console.log(value);
        this.props.updateTodo(this.state.edit.id, value.text);
        this.setState({
            id: null,
            value: ""
        })
    };

    update = (todo) =>
        this.setState({
            edit: {
                id: todo.id,
                value: todo.text
            }
        })

    handleChangeEdit = () => {
        console.log(this.props.edit)
        this.setState({
            edit: {
                id: this.props.edit,
                value: ''
            }
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevProps!==this.props) {
                this.setState({
                    edit: {
                        id: this.props.edit,
                        value: ''
                    }
                })

        }
    }

    render() {
        const {
            todos,
            completeTodo,
            removeTodo,
            updateTodo
        } = this.props

        if (this.state.edit.id) {
            return <Todoformclass edit={this.state.edit} onSubmit={this.submitUpdate}/>;
        }
        return todos.map((todo, index) => {
            return (
                <ul className="todo-list">
                    <li className={` todo ${todo.isComplete && 'complete'}  `} key={index}>
                        <div key={todo.id}>
                            {todo.text}
                        </div>
                        <div className="icons">
                            <RiCheckboxCircleLine
                            style={{fontSize: "22px"}}
                            onClick={() => completeTodo(todo.id)}
                            className="delete-icon"
                            />
                            <RiCloseCircleLine
                                style={{fontSize: "22px"}}
                                onClick={() => removeTodo(todo.id)}
                                className="delete-icon"
                            />
                            <TiEdit
                                style={{fontSize: "22px"}}
                                onClick={() => this.update(todo)}
                                className="delete-icon"
                            />
                        </div>
                    </li>
                </ul>
            )
        })
    }
}

export default Todoclass;

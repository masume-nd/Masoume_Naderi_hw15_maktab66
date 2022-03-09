import React, {useState} from "react";
//import TodoForm from "../todoForm/todoForm";
// import Todo from "../Todo/Todo";
import Todoformclass from "../todoForm/TodoFormClass";
import Todoclass from "../Todo/ToDoClass";

function Todolist() {
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState('')
    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        setTodos((prev) => {
                return prev.map((item) => {
                    return item.id === todoId ? {text: item.text = newValue.trim(), id: todoId} : {text: item.text, id: item.id}
                })
            }
        );

        setEdit(null)

    };
    const removeTodo = (id) => {
        const removeArr = [todos].filter((todo) => todo.id !== id);
        setTodos(removeArr);
    };

    const completeTodo = (id) => {
        let updateTodos = todos.map((todo) => {
            if (todo.id === id) {
               todo.isComplite == !todo.isComplite
            }
            return todo;
        });
        setTodos(updateTodos);
    };

    return (
        <div>
            <Todoformclass onSubmit={addTodo}/>
            <Todoclass
                edit={edit}
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default Todolist;

// import React, { Component } from "react";
// import { BsTrash } from "react-icons/bs";
// import { FiEdit } from "react-icons/fi"
// import "./todoList.css";
// class Todolist extends Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//         todos: [
//           {
//               id: 1,
//               value: "todo 1",
//               isDone: false
//           },
//           {
//               id: 2,
//               value: "todo 2",
//               isDone: true
//           },
//           {
//               id: 3,
//               value: "todo 3",
//               isDone: false
//           }
//       ]
//       };
//    }

// handleDelete = todo => {
//   const todos = this.state.todos.filter((t) => {
//       return t.id !== todo
//   });
//   this.setState({ todos });
// }

// handleDone = todo => {
//   const todos = [...this.state.todos];
//   todos.map((t) => {
//       if (t.id === todo.id) {
//           t.isDone = !t.isDone;
//       }
//       return t;
//   });
//   this.setState({todos});
// }

// addNewTodo = value => {
//   if (value) {
//       const todos = [...this.state.todos];
//       todos.push(
//           {
//               id: this.getTime(),
//               value: value,
//               isDone: false
//           }
//       );
//       this.setState({ addTodoValue: "", todos })
//   } else {
//       console.log("Please Add Todo Text");
//   }
// }

//    render() {
//       return (
//          <div className="todo-list-container">
//             <ul className="todo-list">
//                 {this.state.todos.map((todo, index) => (
//                   <li key={todo.id}>
//                       <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
//                   </li>
//                 ))}
//                   <li className="todo"> سلام ملینای خراب
//                      <BsTrash />
//                       <FiEdit />
//                   </li>
//             </ul>
//          </div>
//       );
//    }
// }

// export default Todolist;

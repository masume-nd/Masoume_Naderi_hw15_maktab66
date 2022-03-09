import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "../todoForm/todoForm";
import "./Todo.css";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
   const [edit, setEdit] = useState({
      id: null,
      value: "",
   });

   const submitUpdate = (value) => {
      updateTodo(edit.id, value);
      setEdit({
         id: null,
         value: "",
      });
   };

   if (edit.id) {
      return <TodoForm edit={edit} onSubmit={submitUpdate} />;
   }

   return todos.map((todo, index) => (
      <ul className="todo-list">
         <li className={todo.isComplete ? "todo complete" : "todo"} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
               {todo.text}
            </div>
            <div className="icons">
               <RiCloseCircleLine
                  style={{ fontSize: "20px" }}
                  onClick={() => removeTodo(todo.id)}
                  className="delete-icon"
               />
               <TiEdit
                  style={{ fontSize: "20px" }}
                  onClick={() => setEdit({ id: todo.id, value: todo.text })}
                  className="delete-icon"
               />
            </div>
         </li>
      </ul>
   ));
}

export default Todo;

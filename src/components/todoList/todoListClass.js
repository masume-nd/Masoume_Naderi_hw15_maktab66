import React, { Component } from "react";
import Todoformclass from "../todoForm/TodoFormClass";
import Todoclass from "../Todo/ToDoClass";

class Todolistclass extends Component {
   constructor(props) {
      super(props);
      this.state = {
         todos: [],
         edit: "",
      };
   }
   addTodo = (todo) => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
         return;
      }
      this.setState({ todos: [todo, ...this.state.todos] });
      
   };
   updateTodo = (todoId, newValue) => {
      this.setState((prev) => {
         return prev.todos.map((item) => {
            return item.id === todoId
               ? { text: (item.text = newValue.trim()), id: todoId }
               : { text: item.text, id: item.id };
         });
      });
      this.setState({ edit: null });
   };

   removeTodo = (id) => {
      const removeArr = this.state.todos.filter((todo) => todo.id !== id);
      this.setState({ todos: removeArr });
   };

   completeTodo = (id) => {
      let updateTodos = this.state.todos.map((todo) => {
         if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
         }
         return todo;
      });
      this.setState({ todos: updateTodos });
   };
   
   render() {
      return (
         <div>
            <Todoformclass onSubmit={this.addTodo} />
            <Todoclass
               edit={this.state.edit}
               todos={this.state.todos}
               completeTodo={this.completeTodo}
               removeTodo={this.removeTodo}
               updateTodo={this.updateTodo}
            />
         </div>
      );
   }
}

export default Todolistclass;

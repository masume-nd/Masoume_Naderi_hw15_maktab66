import React, { Component } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./Form.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Todoformclass extends Component {
   constructor(props) {
      super(props);
      this.state = {
         input: props.edit ? props.edit.value : "",
      };
   }

   handleChange = (e) => {
      this.setState({ input: e.target.value });
   };

   HandleSubmit = (e) => {
      e.preventDefault();
      this.setState({ input: "" });
      return this.props.onSubmit({
         id: Math.floor(Math.random() * 10000),
         text: this.state.input,
      });
   };
   notify = () => toast("To Do successfully added!");

   render() {
      return (
         <div>
            <form className="add-todo-form" onSubmit={this.HandleSubmit}>
               {this.props.edit ? (
                  <>
                     <input
                        type="text"
                        name="text"
                        value={this.state.input}
                        className="input-todo"
                        placeholder="Update your item"
                        onChange={this.handleChange}
                        //ref={inputRef}
                     />
                     <button className="add-todo-btn">Update</button>
                  </>
               ) : (
                  <>
                     <input
                        type="text"
                        name="text"
                        value={this.state.input}
                        className="input-todo"
                        placeholder="add a todo"
                        onChange={this.handleChange}
                        // ref={inputRef}
                     />
                     <button className="add-todo-btn" onClick={this.notify}>
                        <AiOutlinePlus style={{ fontSize: 20 }} />
                     </button>
                     <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        className="toastiStyle"
                     />
                  </>
               )}
            </form>
         </div>
      );
   }
}

export default Todoformclass;

// const toDoItems = [
//   {
//     name: 'Click "Create" to create new task',
//     completed: false
//   },
//   {
//     name: 'Click "Edit" to edit task',
//     completetd: false
//   },
//   {
//     name: 'Click "Delete" to remove task',
//     completed: false
//   },
//   {
//     name: "Click on task to mark as complete",
//     completed: false
//   }
// ];

// class CreateItem extends React.Component {
//   handleCreate(e) {
//     e.preventDefault();

//     if (!this.refs.newItemInput.value) {
//       alert('Please enter a task name.');
//       return;
//     } else if (this.props.toDoItems.map(element => element.name).indexOf(this.refs.newItemInput.value) != -1) {
//       alert('This task already exists.');
//       this.refs.newItemInput.value = '';
//       return;
//     }

//     this.props.createItem(this.refs.newItemInput.value);
//     this.refs.newItemInput.value = '';
//   }

//   render() {
//     return (
//       <div className="create-new">
//         <form onSubmit={this.handleCreate.bind(this)}>
//           <input type="text" placeholder="New Task" ref="newItemInput" />
//           <button>Create</button>
//         </form>
//       </div>
//     );
//   }
// }

// class ToDoListItem extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       editing: false
//     };
//   }

//   renderName() {
//     const itemStyle = {
//       'text-decoration': this.props.completed ? 'line-through' : 'none',
//       cursor: 'pointer'
//     };

//     if(this.state.editing) {
//       return (
//           <form onSubmit={this.onSaveClick.bind(this)}>
//             <input type="text" ref="editInput" defaultValue={this.props.name} />
//           </form>
//       );
//     }

//     return (
//       <span style={itemStyle} onClick={this.props.toggleComplete.bind(this, this.props.name)}>{this.props.name}</span>
//     );
//   }

//   renderButtons() {
//     if (this.state.editing) {
//       return (
//         <span>
//           <button onClick={this.onSaveClick.bind(this)}>Save</button>
//           <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
//         </span>
//       );
//     }

//     return (
//       <span>
//         <button onClick={this.onEditClick.bind(this)}>Edit</button>
//         <button onClick={this.props.deleteItem.bind(this, this.props.name)}>Delete</button>
//       </span>
//     );
//   }

//   onEditClick() {
//     this.setState({ editing: true });
//   }

//   onCancelClick() {
//     this.setState({ editing: false });
//   }

//   onSaveClick(e) {
//     e.preventDefault();
//     this.props.saveItem(this.props.name, this.refs.editInput.value);
//     this.setState({ editing: false });
//   }

//   render() {
//     return (
//       <div className="to-do-item">
//         <span className="name">
//         {this.renderName()}
//         </span>
//         <span className="actions">
//         {this.renderButtons()}
//         </span>
//       </div>
//     );
//   }
// }

// class ToDoList extends React.Component {
//   renderItems() {
//     return this.props.toDoItems.map((item, index) => <ToDoListItem key={index} {...item} {...this.props} />);
//   }

//   render() {
//     return (
//       <div className="items-list">
//         {this.renderItems()}
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       toDoItems
//     };
//   }

//   createItem(item) {
//     this.state.toDoItems.unshift({
//       name: item,
//       completed: false
//     });
//     this.setState({
//       toDoItems: this.state.toDoItems
//     });
//   }

//   findItem(item) {
//     return this.state.toDoItems.filter((element) => element.name === item)[0];
//   }

//   toggleComplete(item) {
//     let selectedItem = this.findItem(item);
//     selectedItem.completed = !selectedItem.completed;
//     this.setState({ toDoItems: this.state.toDoItems });
//   }

//   saveItem(oldItem, newItem) {
//     let selectedItem = this.findItem(oldItem);
//     selectedItem.name = newItem;
//     this.setState({ toDoItems: this.state.toDoItems });
//   }

//   deleteItem(item) {
//     let index = this.state.toDoItems.map(element => element.name).indexOf(item);
//     this.state.toDoItems.splice(index, 1);
//     this.setState({ toDoItems: this.state.toDoItems });
//   }

//   render() {
//     return (
//       <div className="to-do-app">
//         <div className="header">
//           <h1>ToDo List</h1>
//         </div>
//         <CreateItem toDoItems={this.state.toDoItems} createItem={this.createItem.bind(this)} />
//         <ToDoList toDoItems={this.state.toDoItems} deleteItem={this.deleteItem.bind(this)} saveItem={this.saveItem.bind(this)} toggleComplete={this.toggleComplete.bind(this)} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

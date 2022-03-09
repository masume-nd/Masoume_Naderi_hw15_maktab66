import "./App.css";
// import TodoForm from './components/todoForm/todoForm';
// import Todolist from './components/todoList/todoList';
import Todolistclass from "./components/todoList/todoListClass";
import citty from "./assets/pic/07b0e5615c800b7df8eb89660598683a.jpeg";
import pellMell from "./assets/pic/ed68bedc26d7c6b80f88ea9c7848e7bc.jpeg";


function App() {
   return (
      <div className="App">
         <div className="image-container">
            <img className="citty-img" src={citty} alt="citty" />
            <img className="pellMell-img" src={pellMell} alt="pellMell" />
         </div>
        
         <h1 className="header-txt">MY FAVORITE ACTIVITYS </h1>
         <Todolistclass />
      </div>
   );
}

export default App;

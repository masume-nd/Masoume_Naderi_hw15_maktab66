import React, { useState ,useEffect , useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./Form.css";
function TodoForm (props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const HandleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text : input
    })

    setInput('')

  }

  return (
      <form className="add-todo-form" onSubmit={HandleSubmit}>
        {props.edit ? (
        <>
           <input
              type="text"
              name="text"
              value={input}
              className="input-todo"
              placeholder="Update your item"
              onChange={handleChange}
              ref={inputRef}
       />
            <button className="add-todo-btn">
                Update
            </button>
       </>
        ): (
          <>
           <input
              type="text"
              name="text"
              value={input}
              className="input-todo"
              placeholder="add a todo"
              onChange={handleChange}
              ref={inputRef}
       />
            <button className="add-todo-btn">
                <AiOutlinePlus style={{fontSize:20}}/>
            </button>
       </>
        )}
      </form>
  );
}
export default TodoForm;

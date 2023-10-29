import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./TodoItem";

function App() {  
  const [item, addItem] = useState("");
  const [ar, addEl] = useState([]);
  
  

  function handleChange(event) {
    addItem(event.target.value);
  }

  function click() {
    addEl((prevItem) => [...prevItem, item]);
    addItem("");
  }

  function deleteItem(id){
    addEl((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
      <InputArea 
        hc={handleChange}
        ai={click}
        it={item}
      />
      </div>
      <div>
      <ul>
          {ar.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

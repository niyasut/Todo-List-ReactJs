import React from "react";
import { useState } from "react";
const AddTask = ({addTask}) => {
  const [value, setValue] = useState("");

  const addItem = ()=> {
    addTask(value)
  }
  return (
    <div>
      <div className="input-container">
        <input type="text" className="input" placeholder="Add a new task" 
        onChange={(e)=>{
          setValue(e.target.value);
        }}
        />
        <button onClick={addItem} className="add-btn"
        >ADD</button>
      </div>
    </div>
  );
};

export default AddTask;

import React from "react";
import { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import "./Todo.css";

  const Todo = () => {
  const [tasks, setTasks] = useState([
  ]);
  const addTask =(title)=> 
  { const newTask = [...tasks, {title}];
   setTasks(newTask)

  }
  return (
    <>
      <div className="todo-container">
        <div className="header">TODO APP</div>
        <div className="add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks" >

          {tasks.map((task) => (
           
            <ListTask task={task} key={task.key} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Todo;

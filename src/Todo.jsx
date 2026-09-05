import { useState } from "react";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const completeTask = (index) => {
  const newCompleted = [...completed];
  newCompleted[index] = !newCompleted[index];
  setCompleted(newCompleted);
};

  return (
    <div className="todo">
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((item, index) => (
          <li
             key={index}
             style={{ textDecoration: completed[index] ? "line-through" : "none" }}
>
            {item} 
           <button onClick={() => completeTask(index)}>
           {completed[index] ? "Completed" : "Complete"}
           </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
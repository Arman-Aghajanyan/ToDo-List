import React from "react";
import remove from "./images/remove.png";

function TaskDeleteButton({ task, tasks, setTask }) {
  const handleDeleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  return (
    <button onClick={() => handleDeleteTask(task.id)} className="buttons">
      <img src={remove} alt="delete" />
    </button>
  );
}

export default TaskDeleteButton;

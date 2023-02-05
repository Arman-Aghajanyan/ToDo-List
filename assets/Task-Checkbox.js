import React from "react";

function TaskCheckbox({ task, tasks, setTask }) {
  const handeCheckTask = (id) => {
    const checkedTask = tasks.map((task) => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
      return task;
    });
    setTask(checkedTask);
  };
  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={task.checked}
      onChange={() => handeCheckTask(task.id)}
    />
  );
}

export default TaskCheckbox;

import React from "react";

function TaskForm({
  tasks,
  setTask,
  newTask,
  setNewTask,
  newTime,
  setTime,
  setEditText,
  setEditTime,
}) {
  const handleTextChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask === "" || newTime === "") return;
    const task = {
      id: Date.now(),
      taskName: newTask,
      taskTime: newTime,
      checked: false,
    };
    setNewTask("");
    setTime("");
    setTask([...tasks, task]);
    setEditText(newTask);
    setEditTime(newTime);
  };

  return (
    <>
      {" "}
      <h1 className="h1">My ToDo List</h1>
      <div className="form-header">
        <form onSubmit={handleAddTask} className="form">
          <input
            type="text"
            onChange={handleTextChange}
            value={newTask}
            className="form-input"
          />
          <input
            type="datetime-local"
            onChange={handleTimeChange}
            value={newTime}
            className="form-input"
          />
          <button type="submit" className="add-button">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskForm;

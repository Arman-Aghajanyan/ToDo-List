import React from "react";
import pencil from "./images/edit.png";
import submitEdit from "./images/save.png";
import TaskDeleteButton from "./Task-DeleteButton";
import back from "./images/back.png";
export default TaskItemEdit;

function TaskItemEdit({
  task,
  tasks,
  setTask,
  setEditId,
  editId,
  editName,
  editTime,
}) {
  const handleEditTask = (id) => {
    if (editName === "" || editTime === "") return;
    const editTask = tasks.map((task) => {
      if (task.id === id) {
        task.taskName = editName;
        task.taskTime = editTime;
        task.checked = false;
      }
      return task;
    });
    setTask(editTask);
    setEditId(null);
  };

  const handleCancelTask = () => {
    setEditId(null);
  };

  return (
    <>
      {editId === task.id ? (
        <>
          <button className="buttons" onClick={() => handleEditTask(task.id)}>
            <img src={submitEdit} alt="save" className="img-button" />
          </button>
          <button onClick={handleCancelTask} className="buttons">
            <img src={back} alt="back" className="img-button" />
          </button>
        </>
      ) : (
        <>
          <button className="buttons" onClick={() => setEditId(task.id)}>
            <img src={pencil} alt="edit" className="img-button" />
          </button>
          <TaskDeleteButton task={task} tasks={tasks} setTask={setTask} />
        </>
      )}
    </>
  );
}

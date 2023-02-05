import React from "react";

function TaskNameDate({
  task,
  editId,
  editName,
  editTime,
  setEditText,
  setEditTime,
}) {
  const handleTextChange = (e) => {
    setEditText(e.target.value);
  };
  const handleTimeChange = (e) => {
    setEditTime(e.target.value);
  };

  return (
    <>
      {editId === task.id ? (
        <>
          <input
            type="text"
            onChange={handleTextChange}
            defaultValue={editName}
            className="edited-input"
          />
          <input
            type="datetime-local"
            onChange={handleTimeChange}
            defaultValue={editTime}
            className="edited-input"
          />
        </>
      ) : (
        <h4 className="taskName-Time">
          {task.taskName} {task.taskTime}
        </h4>
      )}
    </>
  );
}

export default TaskNameDate;

// noinspection BadExpressionStatementJS

import React from "react";
import TaskItem from "./Task-Item";
function TaskList({
  tasks,
  setTask,
  setEditId,
  editId,
  editName,
  editTime,
  setEditText,
  setEditTime,
}) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          tasks={tasks}
          setTask={setTask}
          setEditId={setEditId}
          editId={editId}
          editName={editName}
          editTime={editTime}
          setEditText={setEditText}
          setEditTime={setEditTime}
        />
      ))}
    </div>
  );
}

export default TaskList;

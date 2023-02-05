import React from "react";
import TaskItemEdit from "./assets2/Task-Item-Edit";
import TaskCheckbox from "./assets2/Task-Checkbox";
import TaskNameDate from "./assets2/Task-NameDate";

function TaskItem({
  task,
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
    <>
      <div className="task-item">
        <TaskCheckbox tasks={tasks} setTask={setTask} task={task} />
        <TaskNameDate
          task={task}
          editId={editId}
          editName={editName}
          editTime={editTime}
          setEditText={setEditText}
          setEditTime={setEditTime}
        />
        <TaskItemEdit
          setEditId={setEditId}
          editId={editId}
          task={task}
          tasks={tasks}
          setTask={setTask}
          editName={editName}
          editTime={editTime}
        />
      </div>
    </>
  );
}

export default TaskItem;

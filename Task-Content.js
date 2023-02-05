import React, { useState } from "react";
import TaskForm from "./assets/Task-Form";
import TaskList from "./assets/Task-List";
function TaskContent() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newTime, setTime] = useState("");
  const [editName, setEditText] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editId, setEditId] = useState(null);

  return (
    <>
      <TaskForm
        tasks={tasks}
        setTask={setTask}
        newTask={newTask}
        setNewTask={setNewTask}
        newTime={newTime}
        setTime={setTime}
        setEditText={setEditText}
        setEditTime={setEditTime}
      />
      <TaskList
        tasks={tasks}
        setTask={setTask}
        setEditId={setEditId}
        editId={editId}
        editName={editName}
        editTime={editTime}
        setEditText={setEditText}
        setEditTime={setEditTime}
      />
    </>
  );
}

export default TaskContent;

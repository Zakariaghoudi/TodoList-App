import "./Task.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleDone, editTask } from "../Redux/TodoSlice";

function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleToggle = () => {
    dispatch(toggleDone(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      if (newDescription.trim() && newDescription.trim() !== task.description) {
        dispatch(
          editTask({ id: task.id, newDescription: newDescription.trim() })
        );
      }
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className={`task-item${task.isDone ? " done" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span className="task-desc">{task.description}</span>
      )}
      <div className="task-actions">
        <button onClick={handleToggle}>{task.isDone ? "Undo" : "Done"}</button>
        <button className={isEditing ? "save" : "edit"} onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Task;

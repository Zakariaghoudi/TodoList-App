import "./Task.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleDone, editTask } from "../Redux/TodoSlice";
import { FaCheckCircle, FaUndo, FaEdit, FaSave, FaTrash } from "react-icons/fa";
function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleToggle = () => {
    dispatch(toggleDone(task.id));
  }

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      if (
        newTitle.trim() &&
        newDescription.trim() &&
        (newTitle.trim() !== task.title ||
          newDescription.trim() !== task.description)
      ) {
        dispatch(
          editTask({
            id: task.id,
            title: newTitle.trim(),
            newDescription: newDescription.trim(),
          })
        );
      }
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className={`task-item${task.isDone ? " done" : ""}`} > 
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Title"
            className="task-title-input"
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Description"
            className="task-desc-input"
          />
        </>
      ) : (
        <>
          <h3
            className="task-title"
            style={{ fontWeight: 600, fontSize: "1.1em", marginRight: 10 }}
          >
            {task.title}
          </h3>
          <span className="task-desc">{task.description}</span>
        </>
      )}
      <div className="task-actions">
        <button
          className="icon-btn done"
          onClick={handleToggle}
          title={task.isDone ? "Undo" : "Done"}
        >
          {task.isDone ? <FaUndo /> : <FaCheckCircle />}
        </button>
        <button
          className={`icon-btn ${isEditing ? "save" : "edit"}`}
          onClick={handleEdit}
          title={isEditing ? "Save" : "Edit"}
        >
          {isEditing ? <FaSave /> : <FaEdit />}
        </button>
        <button
          className="icon-btn delete"
          onClick={handleDelete}
          title="Remove"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Task;

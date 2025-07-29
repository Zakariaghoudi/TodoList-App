import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/TodoSlice";
import "./AddTask.css";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      dispatch(
        addTask({
          title: title.trim(),
          id: Math.floor(Math.random() * 1000),
          description: description.trim(),
          isDone: false,
        })
      );
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        className="add-task-input"
        type="text"
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="add-task-input"
        type="text"
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="add-task-btn" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;

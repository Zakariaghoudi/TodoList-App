import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/TodoSlice';
import "./AddTask.css"

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTask({
        id: Math.floor(Math.random()*1000),
        description: description.trim(),
        isDone: false,
      }));
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
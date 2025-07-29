import "./ListTask.css";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { setFilterStatus } from "../Redux/TodoSlice";

function ListTask() {
  const tasks = useSelector((state) => state.todos.tasks);
  const filterStatus = useSelector((state) => state.todos.filterStatus);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === "done") {
      return task.isDone;
    } else if (filterStatus === "not_done") {
      return !task.isDone;
    }
    return true; // 'all'
  });

  return (
    <div className="list-task-container">
      <div className="list-task-filters">
        <button onClick={() => dispatch(setFilterStatus("all"))}>All</button>
        <button onClick={() => dispatch(setFilterStatus("done"))}>Done</button>
        <button onClick={() => dispatch(setFilterStatus("not_done"))}>
          Not Done
        </button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTask;

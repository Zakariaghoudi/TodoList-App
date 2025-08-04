// src/App.js
import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';

function App() {
  return (
    <div className="App">
      <h1>ToDo List App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
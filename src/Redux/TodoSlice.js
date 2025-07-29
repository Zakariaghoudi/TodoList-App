import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: 1, title:"Coffee", description: "Take a coffee", isDone: false },
    { id: 2, title:"Reading", description: "Read a book  ", isDone: false },
    { id: 3, title:"Watching", description: "Watch anime", isDone: true },

  ],
  filterStatus: "all",

  
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // action.payload will be the new task object { id, description, isDone }
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      // action.payload will be the id of the task to delete
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleDone: (state, action) => {
      // action.payload will be the id of the task to toggle
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      // action.payload will be { id, newDescription }
      const { id, newDescription } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.description = newDescription;
      }
    },
    setFilterStatus: (state, action) => {
      // action.payload will be 'all', 'done', or 'not_done'
      state.filterStatus = action.payload;
    },
  },
});

export const { addTask, deleteTask, toggleDone, editTask, setFilterStatus } =
  todoSlice.actions;

export default todoSlice.reducer;

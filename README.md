# ToDo App

This is a simple ToDo application built with React and Redux Toolkit.

## Features

* **Add Tasks:** Users can add new tasks with a title and description.
* **View Tasks:** All tasks are displayed in a list.
* **Filter Tasks:** The task list can be filtered to show all tasks, only completed tasks ("Done"), or only incomplete tasks ("Not Done").
* **State Management:** The application uses Redux for centralized state management of tasks.

## Project Structure

The project is organized into the following key directories:

### `src/components/`

This folder contains the UI components of the application.

* `AddTask.js`: The component for the form used to add new tasks.
* `ListTask.js`: The component responsible for displaying the list of tasks.
* `Task.js`: The component for an individual task item within the list.
* Corresponding `.css` files for each component (`AddTask.css`, `ListTask.css`, `Task.css`) handle the styling.

### `src/redux/`

This folder holds the Redux logic for state management.

* `Store.js`: Configures and sets up the Redux store for the application.
* `TodoSlice.js`: A Redux "slice" that defines the initial state, reducers, and actions for managing the todo list.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Redux Toolkit:** The official, opinionated, batteries-included toolset for efficient Redux development.
* **CSS:** Used for styling the application components.

## Deployment

The application is deployed and accessible at the following URL:

[todolist-woad-seven.vercel.app](https://todolist-woad-seven.vercel.app)

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Zakariaghoudi/TodoList-App.git]
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd [project-folder]
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the application:**
    ```bash
    npm start
    ```

The app should now be running on `http://localhost:3000` in your web browser.

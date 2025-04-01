import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import UpdateTask from "./components/UpdateTask";

const tasksData = [
  {
    id: 1,
    title: "First Task",
    description: "First Task details",
    statu: "Non Terminé",
    date_creation: "2025-03-15"
  },
  {
    id: 2,
    title: "Second Task",
    description: "Second Task details",
    statu: "Terminé",
    date_creation: "2025-03-14"
  },
  {
    id: 3,
    title: "Third Task",
    description: "Second Task details.",
    statu: "Terminé",
    date_creation: "2025-03-13"
  },
  {
    id: 4,
    title: "Fourth Task",
    description: "Fourth Task details",
    statu: "Terminé",
    date_creation: "2025-03-12"
  }
];




function App() {
  const [tasks, setTasks] = useState(tasksData)


  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id != id))


  }
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask])

  }
  const onUpdateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Home tasks={tasks} handleDeleteTask={handleDeleteTask} />} />
          <Route path="/addTask" element={<AddTask handleAddTask={handleAddTask} />} />
          <Route path="/taskDetails/:id" element={<TaskDetails tasks={tasks} />} />
          <Route path="/updateTask/:id" element={<UpdateTask tasks={tasks} onUpdateTask={onUpdateTask} />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

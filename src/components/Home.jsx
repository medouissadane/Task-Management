import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ tasks, handleDeleteTask }) {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("");

  const handleDelete = (id) => {

    handleDeleteTask(id);
  };

  const filteredTasks = filter ? tasks.filter((task) => task.statu === filter) : tasks;

  return (
    <>
      <button onClick={() => { navigate("/addTask") }}>
        Add Task
      </button>

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Terminé">Terminé</option>
        <option value="Non Terminé">Non Terminé</option>
      </select>

      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Update</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.statu}</td>
              <td>
                <button onClick={() => { navigate(`/updateTask/${task.id}`) }}>
                  Update
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => { navigate(`/taskDetails/${task.id}`) }}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

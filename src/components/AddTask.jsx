import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




export default function AddProduct({ handleAddTask }) {
  const [TasktData, setTaskData] = useState({
    id: 4,
    title: "",
    description: "",
  });


  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddTask({
      ...TasktData,
      id: TasktData.id + 1,
      statu: "Non Terminé",
      date_creation: new Date().toLocaleDateString(),
    });
    navigate("/");
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={TasktData.title}
            onChange={(e) => { setTaskData({ ...TasktData, title: e.target.value }) }}

          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={TasktData.description}
            onChange={(e) => { setTaskData({ ...TasktData, description: e.target.value }) }}

          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

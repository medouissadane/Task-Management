import React from "react";
import { useParams, useNavigate } from "react-router";

export default function TaskDetails({ tasks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((task) => task.id === parseInt(id));



  return (
    <>
      <h1>Task Details</h1>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.statu}</p>
      <p><strong>date_creation</strong> {task.date_creation}</p>
      <button onClick={() => { navigate(-1) }}>Back</button>
    </>
  );
}

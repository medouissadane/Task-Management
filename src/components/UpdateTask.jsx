import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateTask({ tasks, onUpdateTask }) {
    const navigate = useNavigate();

    const { id } = useParams();
    const task = tasks.find((task) => task.id === parseInt(id));

    const [updatedTask, setUpdatedTask] = useState(
        task
    );


    const handleChange = (e) => {
        setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateTask(updatedTask);
        navigate("/");

    };

    return (
        <div>
            <h2>Update Task</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={updatedTask.title}
                        onChange={handleChange}

                    />
                </label>
                <br />

                <label>
                    Description:
                    <textarea
                        name="description"
                        value={updatedTask.description}
                        onChange={handleChange}

                    />
                </label>
                <br />

                <label>
                    Status:
                    <select name="statu" value={updatedTask.statu} onChange={handleChange}>
                        <option value="Terminé">Terminé</option>
                        <option value="Non Terminé">Non Terminé</option>
                    </select>
                </label>
                <br />

                <button type="submit">Update Task</button>
            </form>
        </div>
    );
}

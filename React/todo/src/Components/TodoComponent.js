import axios from "axios";
import React, { useEffect, useState } from "react";

const initialValues = {
  task: "",
  deadline: "Tomorrow",
  createdDate: new Date().toLocaleDateString("en-US"),
};

export default function TodoComponent() {
  const [values, setValues] = useState(initialValues);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  // console.log(values)
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/todo", values);
    setValues(initialValues);
    getTodos();
  };

  const getTodos = async () => {
    let res = await axios.get("http://localhost:5000/todo");
    setTodos([...res.data]);
  };

  const updateTask = async (id) => {
    let todo = await axios.get("http://localhost:5000/todo/" + id);
    let isComplete = todo.data.isComplete ? 0 : 1;
    await axios.put(`http://localhost:5000/todo/${id}`, {
      ...todo.data,
      isComplete: isComplete,
    });
    getTodos();
  };
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/todo/${id}`);
    getTodos();
  };

  return (
    <div className="todo-wrapper">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="Task"
            onChange={handleChange}
            value={values.task}
          />
          <select name="deadline" onChange={handleChange}>
            <option value="Tomorrow">Tomorrow</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="todo-list">
        <ol>
          {todos.map((td, key) => (
            <li className={`${td.isComplete ? "complete" : ""}`} key={key}>
              <p onClick={() => updateTask(td.id)}>
                {td.task} | {td.deadline} | {td.createdDate}
              </p>
              <button onClick={() => deleteTask(td.id)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

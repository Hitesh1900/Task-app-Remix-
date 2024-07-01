import { useState } from "react";
export default function Index() {
  const [task, setTask] = useState('');

  const createTask = async () =>
    await fetch("http://localhost:3000/api/createTask", {
      method: "POST",
      body: JSON.stringify({
        name: task
      })
    })
  return (
    <div className="container">
      <div className="task-tab">
        <h4>Task List</h4>
        <hr />
        <div>
          <form className="form" onSubmit={createTask}>
            <input type="text" name="name" onChange={(e) => setTask(e.target.value)} />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="task-list">
          <ul>
              <li>
                <p>Task 1</p>
                <input type="checkbox" name="brand" id="" />
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
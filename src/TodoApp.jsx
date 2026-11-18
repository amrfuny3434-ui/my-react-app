import { useState, useEffect } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    const trimmed = text.trim();
    if (trimmed === "") {
      return;
    }
    setTasks([...tasks, trimmed]);
    setText("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  return (
    <div className="todo">
      <h2>قائمة المهام</h2>

      <div className="add-row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
          placeholder="اكتب مهمة جديدة"
        />
        <button onClick={addTask}>إضافة</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>مسح</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
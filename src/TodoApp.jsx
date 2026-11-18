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
    <div className="mx-auto my-10 max-w-md rounded-xl bg-white p-6 text-gray-800 shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-blue-600">قائمة المهام</h2>

      <div className="flex gap-2">
        <input
          className="flex-1 rounded-lg border border-gray-300 p-2 outline-none focus:border-blue-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
          placeholder="اكتب مهمة جديدة"
        />
        <button
          className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          onClick={addTask}
        >
          إضافة
        </button>
      </div>

      {tasks.length === 0 && (
        <p className="mt-4 text-center text-gray-400">مفيش مهام لسه</p>
      )}

      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b border-gray-200 py-2"
          >
            <span>{task}</span>
            <button
              className="cursor-pointer rounded-lg bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
              onClick={() => deleteTask(index)}
            >
              مسح
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
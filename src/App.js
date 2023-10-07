import { useMemo, useState } from "react";
import "./App.css";

const initialTodos = [
  {
    name: "Drink water",
    completed: false,
  },
  {
    name: "Eat breakfast",
    completed: true,
  },
  {
    name: "Go washroom",
    completed: false,
  },
];

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  function addTodo() {
    setTodos((prevState) => [
      ...prevState,
      { name: todoInput, completed: false },
    ]);
  }

  function toggleComplete(index, checked) {
    setTodos((prevState) => {
      const modifiedTodos = [...prevState];
      modifiedTodos[index].completed = checked;
      return modifiedTodos;
    });
  }

  const todosLength = useMemo(()=>{
    return todos.filter(todo => !todo.completed).length
  }, [todos])

  return (
    <div>
      <h1>Todo App - {todosLength}</h1>
      <div className="todos-container">
        <div className="add-todo">
          <input
            type="text"
            placeholder="Enter Todo"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <div className="todos-wrapper">
          {todos.map((todo, index) => (
            <div className="todo">
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleComplete(index, e.target.checked)}
                />
                <p>{todo.name}</p>
              </div>
              <p>{`${todo.completed}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

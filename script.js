import React, { useState } from 'react'; // Import useState hook

function ToDoList() {
  const [todos, setTodos] = useState([]); // State for to-do items (initially empty array)

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]); // Add new to-do item
  };

  const toggleCompleted = (index) => {
    const updatedTodos = [...todos]; // Copy the to-do list to avoid mutation
    updatedTodos[index].completed = !updatedTodos[index].completed; // Toggle completion
    setTodos(updatedTodos); // Update state with modified list
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos]; // Copy the to-do list
    updatedTodos.splice(index, 1); // Remove the to-do item at the given index
    setTodos(updatedTodos); // Update state with modified list
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(index)} />
            {todo.text}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add a new task" onChange={(e) => addTodo(e.target.value)} />
      <button onClick={() => addTodo('')}>Add</button>
    </div>
  );
}

export default ToDoList;

import { useState } from "react";
import './App.css';
import Form from './components/Form';

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleNewTodo = (todo) => {
    const newTodo = {
      todo: todo,
      completed: false,
      date: new Date().toISOString(),
    };

    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="App">
      <Form  handleNewTodo={handleNewTodo}/>
    </div>
  );
}

export default App;

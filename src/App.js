import { useState } from "react";
import './App.css';
import Form from './components/Form';
import TodoCard from "./components/TodoCard";
import TodoPage from "./pages/TodoPage";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleNewTodo = (todo) => {
    const newTodo = {
      todo: todo,
      completed: true,
      date: new Date().toISOString(),
    };

    setTodoList([...todoList, newTodo]);
  };
  
  const handleDeleteTodo = (id) =>{
    //this method creates a new array, returns an array that has specific condition.
    const remainingTodos = todoList.filter((todo) =>{
      return todo.date !== id
    })
    setTodoList(remainingTodos)
  }
  

  return (
    <div className="App">
      <Form  handleNewTodo={handleNewTodo}/>
      <TodoPage todoList={todoList} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;

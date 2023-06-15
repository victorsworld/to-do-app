import { useState } from "react";
import './App.css';
import Form from './components/Form';
import TodoCard from "./components/TodoCard";
import TodoPage from "./pages/TodoPage";

function App() {
  const [todoList, setTodoList] = useState([])
  const [dropdownOption, setDropDownOption] = useState('All')

  const handleNewTodo = (todo) => {
    const newTodo = {
      todo: todo,
      completed: false,
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
  
  const toggleCompleted = (id) =>{
    const updatedTodos = todoList.map((todo)=>{
      if (id === todo.date){
        todo.completed = !todo.completed
      } return todo
    })
    setTodoList(updatedTodos)
  }

  const handleUpdateTodo = (id, updateTodo) =>{
    const updatedTodo = todoList.map((todo)=>{
      if (id === todo.date){
        todo.todo = updateTodo
      } return todo})
      setTodoList(updatedTodo)
  }

  const handleOnChange = (e) =>{
    setDropDownOption(e.target.value)
  }

  const filterTodos = todoList.filter ((todo) => {
    if (dropdownOption === "Completed"){
      return todo.completed === true
    }
    if ( dropdownOption === "Incomplete"){
      return todo.completed === false
    }
    return todo
  })
  console.log(filterTodos)

  return (
    <div className="App">
      <Form  handleNewTodo={handleNewTodo}/>
      <select value={dropdownOption} onChange={handleOnChange}>

        <option value={"All"}>All</option>
        <option value={"Completed"}>Completed</option>
        <option value={"Incompleted"}>Incompleted</option>

      </select>
      <TodoPage todoList={filterTodos} handleDeleteTodo={handleDeleteTodo} 
      toggleCompleted = {toggleCompleted} handleUpdateTodo={handleUpdateTodo} />
    </div>
  );
}

export default App;

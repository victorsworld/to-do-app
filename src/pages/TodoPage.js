import React from 'react'
import TodoCard from '../components/TodoCard'

const TodoPage = ({ todoList , handleDeleteTodo }) => {
  return (
    <div>
        <h1>To-dos:</h1>
        {todoList.length > 0 &&todoList.map((todo) =>{
            return <TodoCard
            key={todo.date} todo={todo} handleDeleteTodo={handleDeleteTodo} />
            
        })}



    </div>
  )
}

export default TodoPage
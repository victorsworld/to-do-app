import React from 'react';

const TodoCard = ({ todo , handleDeleteTodo }) => {
  console.log(todo);

  

  return (
    <div className="card">
      <div>
        <span style={{ textDecoration: todo.completed ? "line-through" : "none"}}>
            {todo.todo}
            </span>
      </div>
      <div>
        <input className='checkbox' type="checkbox" id="my-check" checked={todo.completed} />
        <button className="edit">Edit</button>
        <button className="delete" onClick={() => handleDeleteTodo(todo.date)} >Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;

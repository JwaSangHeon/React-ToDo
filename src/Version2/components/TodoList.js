import React from "react";
import TodoListItem from "./TodoListItem";
import "../styles/TodoList.scss";

const TodoList = ({ todos, onRemoveClick, onClickCheck }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemoveClick={onRemoveClick}
          onClickCheck={onClickCheck}
        />
      ))}
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem /> */}
    </div>
  );
};

export default TodoList;

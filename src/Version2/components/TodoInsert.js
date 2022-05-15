import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import "../styles/TodoInsert.scss";

const TodoInsert = ({ text, onChange, addTodo }) => {
  return (
    <form className="TodoInsert" onSubmit={addTodo}>
      <input
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;

// Version1
// import React from "react";
// import { createGlobalStyle } from "styled-components";
// import TodoHead from "./Version1/components/TodoHead";
// import TodoList from "./Version1/components/TodoList";
// import TodoTemplate from "./Version1/components/TodoTemplate";
// import TodoCreate from "./Version1/components/TodoCreate";

// const GlobalStyle = createGlobalStyle`
// body{
//   background: #bbb;
// }
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <TodoTemplate>
//         <TodoHead />
//         <TodoList />
//         <TodoCreate />
//       </TodoTemplate>
//     </>
//   );
// }
// export default App;

// Version2
import React, { useState, useCallback, useRef } from "react";
import TodoInsert from "./Version2/components/TodoInsert";
import TodoList from "./Version2/components/TodoList";
import TodoTemplate from "./Version2/components/TodoTemplate";
import { useReducer } from "react";

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
};

// [
//   {
//     id: 1,
//     text: "리액트 기초 알아보기",
//     checked: true,
//   },
//   {
//     id: 2,
//     text: "컴포넌트 스타일링해보기",
//     checked: true,
//   },
//   {
//     id: 3,
//     text: "일정 관리 앱 만들어보기",
//     checked: false,
//   },
// ]

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  //고유값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const [text, setText] = useState("");

  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const addTodo = useCallback((e) => {
    e.preventDefault();
    const nextTodo = {
      id: nextId.current,
      text: text,
      checked: false,
    };
    setTodos((prevTodos) => [...prevTodos, nextTodo]);
    // setTodos([...todos, nextTodo]);
    setText("");
    nextId.current += 1;
  }, []);

  const onRemoveClick = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onClickCheck = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert text={text} onChange={onChange} addTodo={addTodo} />
      <TodoList
        todos={todos}
        onRemoveClick={onRemoveClick}
        onClickCheck={onClickCheck}
      />
    </TodoTemplate>
  );
};

export default App;

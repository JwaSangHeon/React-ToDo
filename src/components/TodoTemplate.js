import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 32rem;
  height: 768px;

  position: relative; //추후 박스 하단의 버튼을 위한 속성
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 7px 0;

  margin: 0 auto; //중앙 정렬

  margin-top: 96px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;

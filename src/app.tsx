import React from 'react';

import Todo from "./pages/Todo";

import styled from "styled-components";

const WrapperTodoList = styled.div`
    width: 1000px;
  margin: 0 auto;
`

function App() {
    return (
        <WrapperTodoList>
           <Todo />
        </WrapperTodoList>
    );
}

export default App;

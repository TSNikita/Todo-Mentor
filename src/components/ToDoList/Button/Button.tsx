import React from 'react';

import styled from "styled-components";

const ButtonStyle = styled.button`
      width: 90px;
      height: 30px;
      background-color: blue;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;

  &:hover {
    background-color: white;
    color: blue;
    border: 1px solid blue;
  }
`

type ButtonPropsType = {
    title: string,
    onClick: (addRef: any) => void
}

function Button({title, onClick}: ButtonPropsType) {
    return (
        <div>
            <ButtonStyle type='button' onClick={onClick} >{title}</ButtonStyle>
        </div>
    );
}

export default React.memo(Button);
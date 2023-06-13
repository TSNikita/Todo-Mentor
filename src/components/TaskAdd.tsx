import React from 'react';

import styled from "styled-components";
import Button from "./Button";


const ContainerTaskAdd = styled.div`
  width: 800px;
  height: 120px;
  background-color: olivedrab;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  align-items: center;
`

const Label = styled.label`
    display: block;
`

const Input = styled.input`
  height: 30px;
  width: 400px;
  border-radius: 4px;
  border: none;
  &:focus {
    outline: none;
  }
`

const AddDiv = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

type TaskAddPropsType = {
    onClick: () => void
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    children: React.ReactNode
}


const TaskAdd: React.FC<TaskAddPropsType> = ({onClick, value, onChange, children}) => {
    return (
        <ContainerTaskAdd >
            <AddDiv>
                <Label>
                    <Input type="text" placeholder="Введите название задачи" value={value} onChange={onChange}/>
                </Label>
                <Button title="Add" onClick={onClick} />
            </AddDiv>
            {children}
        </ContainerTaskAdd>
    );
}

export default React.memo(TaskAdd);
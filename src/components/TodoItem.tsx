import React from 'react';

import styled from "styled-components";

import '../assets/styles/style.css'



const ContainerTodo = styled.div`
  width: 800px;
  height: 50px;
  background-color: transparent;
  border: 2px solid cadetblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 20px;
`

const ContainerBtn = styled.div`
    width: 200px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
`

const TitleStyle = styled.h1`
  margin-bottom: 10px;
  font-family: 'Dancing Script';
  font-weight: bold;
  font-size: 20px;
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  input {
    width: 18px;
    height: 18px;
    margin-right: 8px;
  }
  
  p {
    margin: 0px;
  }
`

const ContainerEditBlock = styled.div`
width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`
const InputEdit = styled.input`
height: 20px;
  border: 1px solid green;
  border-radius: 5px;
  outline:none;
  
`

const ButtonEdit = styled.button`
  width: 60px;
  height: 24px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 1px solid green;
    color: green;
  }
`

type TodoItemPropsType = {
    title: string,
    checkedOnClick: () => void,
    checked: boolean
    id: string,
    children: React.ReactNode,
    value: string,
    onChangeInputSave: (event: React.ChangeEvent<HTMLInputElement>) => void,
    valueSave: string,
    handeSaveInput: () => void,
    edit: null | string | boolean
}


function TodoItem({title, id, checked, children, checkedOnClick, onChangeInputSave, valueSave, handeSaveInput, edit}: TodoItemPropsType) {
    return (
        <ContainerTodo>
            <div>
                {edit == id ? (<ContainerEditBlock>
                    <InputEdit type="text" value={valueSave} onChange={onChangeInputSave} />
                    <ButtonEdit onClick={handeSaveInput} >Save</ButtonEdit>
                        </ContainerEditBlock>) :
                    (<TitleStyle id={id}>{title}</TitleStyle>)
                }
                <CheckboxContainer>
                    <label >
                        <input type='checkbox' checked={checked} onClick={checkedOnClick}/>
                        {checked ? <p>Выполнено</p> : <p>Не выполнено</p>}
                    </label>
                </CheckboxContainer>
            </div>
                <ContainerBtn>
                    {children}
                </ContainerBtn>
        </ContainerTodo>
    );
}

export default React.memo(TodoItem);
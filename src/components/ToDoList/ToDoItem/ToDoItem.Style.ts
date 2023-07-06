import styled from "styled-components";

export const ContainerTodo = styled.div`
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

export const ContainerBtn = styled.div`
    width: 200px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
`

export const TitleStyle = styled.h1`
  margin-bottom: 10px;
  font-family: 'Dancing Script';
  font-weight: bold;
  font-size: 20px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  export input {
    width: 18px;
    height: 18px;
    margin-right: 8px;
  }

  export p {
    margin: 0px;
  }
`

export const ContainerEditBlock = styled.div`
width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`
export const InputEdit = styled.input`
height: 20px;
  border: 1px solid green;
  border-radius: 5px;
  outline:none;
  
`

export const ButtonEdit = styled.button`
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
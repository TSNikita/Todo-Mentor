import styled from "styled-components";

export const ContainerTodo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const DropDownContainer = styled.div`
  right: 78px;
  top: 217px;
  position: absolute;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: olivedrab;
    color: white;
  }
`

export const DropDownToggle = styled.div`
  position: absolute;
  background-color: darkgray;
  border-radius: 5px;
  right: 0px;
  top: 30px;

`

export const DropDown = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 5px;
  border: 1px solid darkgreen;
`

// export const ButtonDropDownWrapper = styled.button`
//   width: 150px;
//   height: 30px;
//   background-color: transparent;
//   display: flex;
//   justify-content: end;
//   align-items: ;
// `

export const ButtonDropDown = styled.button`
  width: 150px;
  height: 30px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  &:hover {
    background-color: olivedrab;
    color: white;
  }

  >* {
    width: 15px;
    height: 15px;
  }
`

export const ContainerTaskAdd = styled.div`
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

export const Label = styled.label`
    display: block;
`

export const Input = styled.input`
  height: 30px;
  width: 400px;
  border-radius: 4px;
  border: none;
  &:focus {
    outline: none;
  }
`

export const AddDiv = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

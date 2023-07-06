import styled from "styled-components";

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

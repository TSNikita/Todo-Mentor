import styled from "styled-components";


export  const SearchContainer = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

export const InputSearch = styled.input`
  height: 30px;
  width: 400px;
  border-radius: 4px;
  border: none;
  &:focus {
    outline: none;
  }
`
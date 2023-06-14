import React from 'react';

import styled from "styled-components";


const SearchContainer = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

const InputSearch = styled.input`
  height: 30px;
  width: 400px;
  border-radius: 4px;
  border: none;
  &:focus {
    outline: none;
  }
`
type SearchPropsType = {
    search: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search = ({search, onChange}: SearchPropsType ) => {

    return (
        <SearchContainer>
            <InputSearch type="text" placeholder="Поиск" value={search} onChange={onChange}  />
        </SearchContainer>
    );
}

export default React.memo(Search);
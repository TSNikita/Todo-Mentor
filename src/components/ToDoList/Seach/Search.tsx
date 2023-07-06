import React from 'react';

import {SearchContainer, InputSearch} from './Search.style'

type SearchPropsType = {
    search: string,
    onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search = ({search, onChangeSearch}: SearchPropsType ) => {

    return (
        <SearchContainer>
            <InputSearch type="text" placeholder="Поиск" value={search} onChange={onChangeSearch}  />
        </SearchContainer>
    );
}

export default React.memo(Search);